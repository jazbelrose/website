import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faDownload, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const UploadsComponent = ({ activeProject, onActiveProjectChange }) => {





    const [localActiveProject, setLocalActiveProject] = useState(activeProject || {});
    const [isUploadsModalOpen, setUploadsModalOpen] = useState(false);
    const [selectedUploads, setSelectedUploads] = useState([]);
    const [isImageModalOpen, setImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [isSelectMode, setIsSelectMode] = useState(false);
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
        const fileUrlsToDelete = Array.from(selectedItems);

        try {
            const response = await fetch(apiDeleteEndpoint, {
                method: 'POST',
                body: JSON.stringify({ projectId: activeProject.projectId, field: 'uploads', fileKeys: fileUrlsToDelete }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Failed to delete files.');
            }


            const updatedUploads = localActiveProject.uploads.filter(upload => !selectedItems.has(upload.url));
            const updatedProject = { ...localActiveProject, uploads: updatedUploads };
            setLocalActiveProject(updatedProject);
            setSelectedUploads(updatedUploads);
            setLocalActiveProject(updatedProject);
            onActiveProjectChange(updatedProject);

            const remainingUploads = selectedUploads.filter(upload => !selectedItems.has(upload.url));
            setSelectedUploads(remainingUploads);
            setSelectedItems(new Set()); // Clear the selection
            setIsSelectMode(false); // Exit select mode

            onActiveProjectChange(updatedProject);
        } catch (error) {
            console.error('Error during deletion:', error);
            // Handle error appropriately in the UI
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


    const updateLocalUploads = (newUploads) => {
        const updatedProject = { ...localActiveProject, uploads: newUploads };
        setLocalActiveProject(updatedProject);
        setSelectedUploads(newUploads);


        onActiveProjectChange(updatedProject);
    };

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
                                    <img
                                        src={getThumbnailUrl(upload.url)}
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
