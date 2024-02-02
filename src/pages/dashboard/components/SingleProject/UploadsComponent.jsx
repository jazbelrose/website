import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDownload, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { uploadData } from 'aws-amplify/storage';
import { CircularProgress } from '@mui/material';


const UploadsComponent = ({ activeProject }) => {



    const fileInputRef = useRef(null);

    const [isLoading, setIsLoading] = useState([]);
    const [localActiveProject, setLocalActiveProject] = useState(activeProject || {});
    const [isUploadsModalOpen, setUploadsModalOpen] = useState(false);
    const [selectedUploads, setSelectedUploads] = useState([]);
    const [isImageModalOpen, setImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [isSelectMode, setIsSelectMode] = useState(false);
    const [deleting, setDeleting] = useState(false); // New state for deletion status
    const [uploadingFiles, setUploadingFiles] = useState(new Set());

    const apiGatewayEndpoint = 'https://o01t8q8mjk.execute-api.us-west-1.amazonaws.com/default/zipFiles'
    const apiDeleteEndpoint = 'https://k6utve4soj.execute-api.us-west-1.amazonaws.com/default/DeleteFilesFromS3'




    const openUploadsModal = () => {
        setUploadsModalOpen(true);
        setSelectedUploads(localActiveProject.uploads || []);
    };

    const closeUploadsModal = () => {
        setUploadsModalOpen(false);
    };

    const openImageModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setImageModalOpen(true);
    };

    const closeImageModal = () => {
        setImageModalOpen(false);
    };
    const getThumbnailUrl = (url) => {
        return url.replace(
            "mylguserdata194416-dev.s3.us-west-1.amazonaws.com/protected",
            "mylguserdata194416-dev-resized.s3.us-west-1.amazonaws.com/resized-protected"
        );
    };



    const handleSelectionChange = (url) => {
        const newSelectedItems = new Set(selectedItems);
        if (newSelectedItems.has(url)) {
            newSelectedItems.delete(url);
        } else {
            newSelectedItems.add(url);
        }
        setSelectedItems(newSelectedItems);
    };

    const handleSelectAll = () => {
        if (selectedItems.size === selectedUploads.length) {
            setSelectedItems(new Set());
        } else {
            setSelectedItems(new Set(selectedUploads.map(upload => upload.url)));
        }
    };

    const handleImageSelect = (url) => {
        if (isSelectMode) {
            handleSelectionChange(url);
        }
    };

    const handleImageClick = (url) => {
        if (isSelectMode) {
            handleSelectionChange(url);
        } else {
            openImageModal(url);
        }
    };


    const isSelected = (url) => selectedItems.has(url);


    const toggleSelectMode = () => {
        setIsSelectMode(!isSelectMode);
        if (isSelectMode) {
            setSelectedItems(new Set()); // Clear selection when exiting select mode
        }
    };

    const selectedStyle = {
        border: '2px solid #4CAF50', // Example style for selected images
        // Other styles such as an overlay, opacity change, etc. can be added here
    };

    const handleDelete = async () => {
        const fileUrlsToDelete = Array.from(selectedItems); // Original URLs
        const thumbnailUrlsToDelete = fileUrlsToDelete.map(url => getThumbnailUrl(url));
    
        setDeleting(true); 

        const allUrlsToDelete = [...fileUrlsToDelete, ...thumbnailUrlsToDelete];
    
        
        if (!window.confirm('Are you sure you want to delete the selected uploads?')) {
            return; 
        }
    
        try {
            const response = await fetch(apiDeleteEndpoint, {
                method: 'POST',
                body: JSON.stringify({
                    projectId: activeProject.projectId,
                    field: 'uploads',
                    fileKeys: allUrlsToDelete // Send combined URLs for deletion
                }),
                headers: { 'Content-Type': 'application/json' },
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete files.');
            }
    
            
            const updatedUploads = localActiveProject.uploads.filter(upload => !allUrlsToDelete.includes(upload.url));
            setLocalActiveProject({ ...localActiveProject, uploads: updatedUploads });
            setSelectedUploads(updatedUploads);
            setSelectedItems(new Set());
            setIsSelectMode(false);
    
           
            alert('Selected uploads have been successfully deleted.');
        } catch (error) {
            console.error('Error during deletion:', error);
            alert('Failed to delete selected uploads. Please try again.');
        } finally {
            setDeleting(false); // Indicate deletion process has ended
        }
    };


    const handleFileSelect = async (event) => {
        setIsLoading(true);
        const files = Array.from(event.target.files);
        if (files.length === 0) {
            setIsLoading(false);
            return;
        }


        let uploadsInProgress = files.map(file => ({
            fileName: file.name,
            url: URL.createObjectURL(file), // Temporary URL for local preview
            isLoading: true, // Initially mark as loading
        }));


        let updatedUploads = [...selectedUploads, ...uploadsInProgress];
        setSelectedUploads(updatedUploads);



        for (const file of files) {
            try {
                const uploadedFileInfo = await handleFileUpload(activeProject.projectId, file);

                uploadsInProgress = uploadsInProgress.map(upload => {
                    if (upload.fileName === file.name) {
                        return {
                            ...upload,
                            url: uploadedFileInfo.url,
                            isLoading: false,
                        };
                    }
                    return upload;
                });
            } catch (error) {
                console.error('Upload failed:', error);
            }
        }


        updatedUploads = [...localActiveProject.uploads, ...uploadsInProgress];
        setLocalActiveProject(prevState => ({
            ...prevState,
            uploads: updatedUploads
        }));
        setSelectedUploads(updatedUploads);


        try {
            await updateUploadsToAPI(activeProject.projectId, updatedUploads.map(upload => ({
                fileName: upload.fileName,
                url: upload.url,

            })));
            console.log('Uploads updated successfully');
        } catch (error) {
            console.error('Error updating uploads:', error);
        }

        setIsLoading(false);
        event.target.value = '';
    };


    const handleFileUpload = async (projectId, file) => {
        const filename = `projects/${projectId}/uploads/${file.name}`;
        
        
        setUploadingFiles(prevUploadingFiles => new Set([...prevUploadingFiles, file.name]));
      
        try {
          // Perform the upload
          await uploadData({
            key: filename,
            data: file,
            options: {
              accessLevel: 'protected',
            }
          });
      
          
          await new Promise(resolve => setTimeout(resolve, 2000));
      
          
          const fileUrl = `https://mylguserdata194416-dev.s3.us-west-1.amazonaws.com/protected/us-west-1%3A33762779-d3a2-c552-0eca-a287c4438602/${filename}`;
      
         
          return { fileName: file.name, url: fileUrl };
        } catch (error) {
          console.error('Error uploading file:', error);
          
        } finally {
          
          setUploadingFiles(prevUploadingFiles => {
            const newUploadingFiles = new Set(prevUploadingFiles);
            newUploadingFiles.delete(file.name);
            return newUploadingFiles;
          });
        }
      };
      


    const updateUploadsToAPI = async (projectId, updatedUploads) => {
        const apiUrl = `https://didaoiqxl5.execute-api.us-west-1.amazonaws.com/default/editProject?projectId=${projectId}`;
        const payload = { uploads: updatedUploads };

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('Failed to update uploads');
            console.log('Uploads updated successfully');
        } catch (error) {
            console.error('Error updating uploads:', error);
            // Optionally, provide feedback to the user on failure
        }
    };




    const getZippedFiles = async (fileUrls) => {
        try {
            const fileKeys = fileUrls.map(url => {
                const matches = url.match(/amazonaws\.com\/(.+)$/);
                return matches ? decodeURIComponent(matches[1]) : null;
            }).filter(key => key !== null);

            console.log("Sending file keys to Lambda:", fileKeys);

            const response = await fetch(apiGatewayEndpoint, {
                method: 'POST',
                body: JSON.stringify({ fileKeys: fileKeys }), // Correctly formatted JSON body
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                throw new Error('Failed to get the zip file.');
            }

            const data = await response.json();
            return data.zipFileUrl;
        } catch (error) {
            console.error('Error getting zipped files:', error);
            throw error;
        }
    };


    const handleBulkDownload = async () => {
        const fileUrls = Array.from(selectedItems);

        if (fileUrls.length > 0) {
            try {
                const zipFileUrl = await getZippedFiles(fileUrls);
                initiateDownload(zipFileUrl);
            } catch (error) {
                console.error('Error during bulk download:', error);
                // Handle error appropriately
            }
        }
    };

    const initiateDownload = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = true; // For the zip file, you might want to provide a filename
        document.body.appendChild(link);
        link.click();
        link.remove();
    };




    useEffect(() => {
        setLocalActiveProject(activeProject || {});
        setSelectedUploads(localActiveProject.uploads || []);
    }, [activeProject]);




    useEffect(() => {

        setSelectedUploads(localActiveProject.uploads.map(upload => {

            return {
                ...upload,
                thumbnailUrl: getThumbnailUrl(upload.url)
            };
        }));
    }, [localActiveProject.uploads]);


    useEffect(() => {

        setSelectedUploads(activeProject.uploads || []);
    }, [activeProject, activeProject.uploads]);

    const updateActiveProject = (updatedProject) => {
        setActiveProject(updatedProject);

        setProjects(prevProjects => prevProjects.map(proj => proj.projectId === updatedProject.projectId ? updatedProject : proj));
    };




    return (
        <>
            <div className="dashboard-item uploads" onClick={openUploadsModal}>
                <span>Uploads</span>
                <span>></span>
            </div>

            <Modal
                isOpen={isUploadsModalOpen}
                onRequestClose={closeUploadsModal}
                contentLabel="Uploads Modal"
                style={{
                    overlay: {
                        boxSizing: 'border-box',

                        backgroundColor: 'rgba(0, 0, 0, 0.75)',

                    },
                    content: {

                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',

                        color: 'white',
                        margin: 'auto',
                        minWidth: '375px',
                        maxWidth: '500px',
                        maxHeight: '400px',

                        paddingTop: '20px',
                        borderRadius: '20px'
                    }
                }}
            >
                <div className="uploads-modal-content" style={{ overflowY: 'auto', maxHeight: '320px', width: '100%', margin: '0 auto' }}>
                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '10px',
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        width: '100%', // Ensure the grid takes up the full width of its container
                        height: '100%' // Ensure the grid takes up the full height of its container
                    }}>

                        {isSelectMode && (
                            <li>
                                <input
                                    type="checkbox"
                                    checked={selectedItems.size === selectedUploads.length}
                                    onChange={handleSelectAll}
                                /> Select All
                            </li>
                        )}


                        {selectedUploads.map((upload, index) => (
                            <li key={index} style={{
                                marginBottom: '20px',
                                width: '55px',
                                height: 'auto', // Adjusted to auto
                                display: 'flex',
                                flexDirection: 'column', // Changed to column
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                overflow: 'hidden',
                                height: '100%', // Fixed height for each cell
                                width: '100%',

                            }}

                            >
                                <div
                                    onClick={() => handleImageClick(upload.url)}
                                    style={{
                                        position: 'relative',
                                        cursor: isSelectMode ? 'pointer' : 'default',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                >
                                    {uploadingFiles.has(upload.fileName) ? (
                                        <CircularProgress />
                                    ) : (
                                        <>
                                            <img
                                                src={upload.url}
                                                alt={upload.fileName}
                                                style={{
                                                    maxWidth: '100%',
                                                    maxHeight: '100px',
                                                }}
                                            />
                                            {isSelectMode && (
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '0',
                                                    left: '0',
                                                    right: '0',
                                                    bottom: '0',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: isSelected(upload.url) ? 'rgba(0, 0, 0, 0.5)' : 'transparent', // Overlay if selected
                                                    pointerEvents: 'none',
                                                }}>
                                                    {isSelected(upload.url) && (
                                                        // Show some icon or checkmark if selected
                                                        <FontAwesomeIcon icon={faCheck} style={{ color: '#4CAF50' }} />
                                                    )}
                                                </div>
                                            )}
                                            {!isSelectMode && (
                                                <div style={{ color: 'white', marginTop: '5px' }}>{upload.fileName}</div>
                                            )}
                                        </>
                                    )}
                                </div>



                                <Modal
                                    isOpen={isImageModalOpen}
                                    onRequestClose={closeImageModal}

                                    style={{
                                        overlay: {
                                            boxSizing: 'border-box',

                                            backgroundColor: 'rgba(0, 0, 0, 0.75)',

                                        },
                                        content: {
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            right: 'auto',
                                            bottom: 'auto',
                                            marginRight: '-50%',
                                            transform: 'translate(-50%, -50%)',
                                            minHeight: '350px',
                                            width: 'auto',
                                            height: 'auto',
                                            maxWidth: '90%',
                                            maxHeight: '90%',
                                            overflow: 'auto',
                                        }
                                    }}
                                >
                                    {selectedImage && (

                                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                            <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
                                            {/* Overlay band at the top */}
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '50px', // Adjust the height of the band as needed
                                                backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75), transparent)', // Gradient effect
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '0 10px',
                                            }}>
                                                <button onClick={closeImageModal} style={{ background: 'none', border: 'none', color: 'white' }}>
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </button>
                                                <a href={selectedImage} download style={{ color: 'white' }}>
                                                    <FontAwesomeIcon icon={faDownload} />
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </Modal>
                            </li>
                        ))}
                    </ul>

                    {deleting && (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <CircularProgress />
                        </div>
                    )}
               
                </div>
              

                {/* Modal Footer */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    width: '100%'
                }}>
                    {isSelectMode ? (
                        <>
                            {/* Download Button */}
                            <button
                                className="modal-submit-button"
                                onClick={handleBulkDownload}
                                style={{
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 10px',
                                    transition: 'background-color 0.3s', // Add a smooth transition effect


                                    ':hover': {
                                        color: '#FA3356',
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                <FontAwesomeIcon className="modal-submit-button uploads fa" icon={faDownload} />
                            </button>

                            {/* Delete Button */}
                            <button
                                className="modal-submit-button uploads"
                                onClick={handleDelete}
                                style={{ border: 'none', color: 'white' }}
                            >
                                <FontAwesomeIcon className="modal-submit-button uploads fa" icon={faTrash} />

                            </button>

                            {/* Cancel Button - to exit select mode */}
                            <button
                                className="modal-submit-button uploads"
                                onClick={() => setIsSelectMode(false)}
                                style={{ padding: '10px 20px !important' }}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Select Button */}
                            <button
                                className="modal-submit-button uploads"
                                onClick={() => setIsSelectMode(true)}

                            >
                                Select
                            </button>

                            {/* Upload Button */}
                            <input
                                type="file"
                                multiple
                                onChange={handleFileSelect}
                                style={{ display: 'none' }}
                                ref={fileInputRef}
                            />
                            <button
                                className="modal-submit-button uploads"
                                onClick={() => fileInputRef.current.click()}
                            >
                                Upload
                            </button>

                            {/* Close Button */}
                            <button
                                className="modal-submit-button uploads"
                                onClick={closeUploadsModal}

                            >
                                Close
                            </button>
                        </>
                    )}
                </div>
            </Modal>
        </>
    );
};

export default UploadsComponent;