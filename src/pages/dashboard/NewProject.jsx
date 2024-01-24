import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import Map from "../../components/map";
import { ReactComponent as Snap } from "../../assets/svg/snap.svg";
import { uploadData } from 'aws-amplify/storage';

const NewProject = ({ userName, userId, isNewProjectView, onProjectCreated }) => {

  const [projectName, setProjectName] = useState('');
  const [budget, setBudget] = useState('');
  const [finishLine, setFinishLine] = useState('');
  const [description, setDescription] = useState('');
  const [showFinishLineModal, setShowFinishLineModal] = useState(false);
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFileNames, setSelectedFileNames] = useState("");
  const openFileUploadModal = () => setShowFileUploadModal(true);
  const closeFileUploadModal = () => setShowFileUploadModal(false);
  const mapRef = useRef(null);
  const [location, setLocation] = useState({ lat: 34.0522, lng: -118.2437 });
  const [address, setAddress] = useState('Los Angeles, CA');
  const [typedAddress, setTypedAddress] = useState('');
  const [displayedAddress, setDisplayedAddress] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);





  const collectFormData = () => {


    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;


    return {
      TableName: "Projects",
      Item: {

        title: projectName,
        date: formattedDate,
        dateCreated: formattedDate,
        milestone: '10',
        finishLine: finishLine,
        description: description,
        location: location,
        address: address,
        budget: {
          date: formattedDate,
          total: budget || '0'
        },
        contact: {
          contact: 'N/A',
          name: 'N/A',
          phone: 'N/A'
        },
        finishline: finishLine || formattedDate,
        gallery: '/path/to/gallery',
        invoiceDate: formattedDate,
        invoices: '/path/to/invoices',
        slug: 'project-slug',
        status: '10%',
        tags: [],
        team: [],
        revisionHistory: [],
        thumbnails: [],
        downloads: [],
        uploads: []

      }
    };
  };



  const [showModal, setShowModal] = useState(false);

  const handleProjectNameClick = () => {
    console.log("Project Name Clicked");
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleProjectNameChange = (e) => setProjectName(e.target.value);



  const [showBudgetModal, setShowBudgetModal] = useState(false);

  const handleBudgetClick = () => {
    setShowBudgetModal(true);
  };

  const closeBudgetModal = () => {
    setShowBudgetModal(false);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };


  const handleFinishLineClick = () => {
    setShowFinishLineModal(true);
  };

  const closeFinishLineModal = () => {
    setShowFinishLineModal(false);
  };

  const handleFinishLineChange = (e) => {
    setFinishLine(e.target.value);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
    const fileNames = Array.from(files).map(file => file.name).join(", ");
    setSelectedFileNames(fileNames);
  };

  const clearSelectedFiles = () => {
    setSelectedFiles([]);
    setSelectedFileNames("");
  };




  const handleFileUpload = async (projectId) => {
    const uploadedFileUrls = []; // Array to store the URLs of uploaded files

    try {
      for (let file of selectedFiles) {
        const filename = `projects/${projectId}/uploads/${file.name}`;

        const result = await uploadData({
          key: filename,
          data: file,
          options: {
            accessLevel: 'protected',
          }
        });

        console.log('File uploaded:', result);
        // Construct the file URL and add it to the array
        const fileUrl = `https://mylguserdata194416-dev.s3.us-west-1.amazonaws.com/protected/us-west-1%3A33762779-d3a2-c552-0eca-a287c4438602/${filename}`;
        uploadedFileUrls.push({ fileName: file.name, url: fileUrl });
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      // Handle any errors that occur during file upload
    }

    // Clear the selected files and names, close the modal
    setSelectedFiles([]);
    setSelectedFileNames("");
    closeFileUploadModal();

    return uploadedFileUrls; // Return the array of uploaded file URLs
  };



  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const [showDescriptionModal, setShowDescriptionModal] = useState(false);

  const openDescriptionModal = () => setShowDescriptionModal(true);
  const closeDescriptionModal = () => setShowDescriptionModal(false);


  const handleDescriptionChange = (e) => setDescription(e.target.value);





  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting New Project:", projectName);
    closeModal();
  };

  const handleSubmitBudget = (e) => {
    e.preventDefault();
    console.log("Budget Set:", budget);
    closeBudgetModal();
  };

  const handleSubmitFinishLine = (e) => {
    e.preventDefault();
    console.log("Finish Line Set:", finishLine);
    closeFinishLineModal();

  };



  const searchAddress = async (address) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
      }
      return null;
    } catch (error) {
      console.error("Error during address search:", error);
      return null;
    }
  };


  const handleSearch = async () => {
    const geocodedLocation = await searchAddress(searchQuery);
    if (geocodedLocation) {
      setLocation(geocodedLocation);
      setAddress(searchQuery);  // Set the address to the searched query
      console.log("Updated Location:", geocodedLocation);
      console.log("Updated Address:", searchQuery);
    } else {
      console.log("No location found for the address.");
    }
  };


  const handleAddressSubmit = () => {
    setDisplayedAddress(typedAddress);
    // Update location based on typedAddress if necessary
  };


  const handleSubmitDescription = (e) => {
    e.preventDefault();
    console.log("Description Set:", description);
    closeDescriptionModal();
  };


  const handleFinalSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const initialProjectData = collectFormData();

    try {

      const createResponse = await fetch('https://any6qedkud.execute-api.us-west-1.amazonaws.com/default/PostProjects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(initialProjectData),
      });

      if (!createResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await createResponse.json();
      const realProjectId = data.projectId;



      const uploadedFileUrls = await handleFileUpload(realProjectId);


      const updateData = {
        uploads: uploadedFileUrls
      };


      const updateResponse = await fetch(`https://any6qedkud.execute-api.us-west-1.amazonaws.com/default/PostProjects?TableName=Projects&projectId=${realProjectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData), // Update this line
      });

      if (!updateResponse.ok) {
        throw new Error('Error updating project with file URLs');
      }

      const newProject = {
        ...initialProjectData.Item,
        projectId: realProjectId,
        uploads: uploadedFileUrls

      };




      console.log("Success!");


      setIsSubmitting(false);
      setSubmissionSuccess(true);
      setTimeout(() => {
        onProjectCreated(newProject);

      }, 2000);



    } catch (error) {
      console.error('There was an error with the submission:', error);

    } finally {
      setIsSubmitting(false);
    }
  };







  return (

    <div className="active-project-details">
      <div className='new-project-header'>
        <h2>New Project</h2>
      </div>

      {/*  Greetings  */}


      <div className="column-0">



        <div className="dashboard-item greetings">

          <div className="greetings-text">
            <span className="greeting-line">Hello <span className="username"> {userName} </span> !</span>
            <span className="greeting-line">Let’s get a new project started!</span>
            <span className="greeting-line">Upload floorplans, create your design notes, drop links... Upload files, inspiration images and just submit!</span>

          </div>

          <div className="snap-container">
            <Snap className="new-project-snap" />
          </div>
        </div>


        <div className="dashboard-item project-name" onClick={handleProjectNameClick}>
          <span>{projectName || 'Project Name'}</span>
          <span>+</span>
        </div>

        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          contentLabel="Project Name Modal"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
            content: {
              display: 'flex',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              color: 'white',
              width: '300px',
              height: '400px',
              margin: 'auto',
              paddingTop: '50px',
              borderRadius: '20px'
            }
          }}
        >
          <form onSubmit={handleSubmit} className="modal-form">
            <label className="modal-label">Project Name</label>
            <input type="text" value={projectName} onChange={handleProjectNameChange} className="modal-input" />
            <button type="submit" className="modal-button">Done</button>
          </form>
        </Modal>

      </div>




      <div className='dashboard-layout'>


        {/* Column 1 */}

        <div className="new-project-col1">



          <div className="dashboard-item new-project-budget" onClick={handleBudgetClick}>
            <span>{budget ? `$${budget}` : 'Budget'}</span>
            <span>+</span>
          </div>



          <Modal
            isOpen={showBudgetModal}
            onRequestClose={closeBudgetModal}
            contentLabel="Budget Modal"

            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
              },
              content: {
                display: 'flex',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: 'white',
                width: '300px',
                height: '400px',
                margin: 'auto',
                paddingTop: '50px',
                borderRadius: '20px'
              }
            }}
          >

            <form onSubmit={handleSubmitBudget} className="modal-form">
              <label className="modal-label">Budget</label>
              <input type="text" value={budget} onChange={handleBudgetChange} className="modal-input" />
              <button type="submit" className="modal-button">Done</button>
            </form>
          </Modal>




          <div className="dashboard-item new-project-finish-line" onClick={handleFinishLineClick}>
            <span>{finishLine || 'Finish Line'}</span>
            <span>+</span>
          </div>

          <Modal
            isOpen={showFinishLineModal}
            onRequestClose={closeFinishLineModal}
            contentLabel="Finish Line Modal"
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
              },
              content: {
                display: 'flex',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: 'white',
                width: '300px',
                height: '400px',
                margin: 'auto',
                paddingTop: '50px',
                borderRadius: '20px'
              }
            }}
          >
            <form onSubmit={handleSubmitFinishLine} className="modal-form">
              <label className="modal-label">Finish Line</label>
              <input
                type="date"
                value={finishLine}
                onChange={handleFinishLineChange} className="modal-input"
                placeholder="Finish Line"
              />
              <button type="submit" className="modal-button">Set Finish Line</button>
            </form>
          </Modal>





        </div>




        {/* Column 2 */}

        <div className="new-project-col2">

          <div className="dashboard-item new-project-uploads" onClick={openFileUploadModal}>
            {selectedFileNames ?
              (<span>{selectedFileNames}</span>) :
              (<span>Upload your files</span>)
            }
            <span>+</span>
          </div>

          <Modal
            isOpen={showFileUploadModal}
            onRequestClose={closeFileUploadModal}
            contentLabel="File Upload Modal"
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
              },
              content: {

                display: 'flex',
                overflowX: 'hidden',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: 'white',
                width: '300px',
                height: '400px',
                margin: 'auto',
                paddingTop: '50px',
                borderRadius: '20px'
              }
            }}
          >

            <form className="modal-form">
              <div className="file-upload-btn" onClick={handleFileButtonClick}>
                Choose Files
              </div>
              <div className="selected-files">
                {selectedFileNames || "No files selected"}
              </div>
              {selectedFiles.length > 0 && (
                <button
                  onClick={clearSelectedFiles}
                  className="clear-files-button"
                  style={{
                    marginTop: '10px',
                    marginBottom: '10px',
                    borderRadius: '20px',
                    padding: '10px 15px'
                  }}
                >
                  Clear Files
                </button>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                className="file-input"
              />
              <button type="button" className="modal-submit-button" onClick={closeFileUploadModal}>Done</button>
            </form>
          </Modal>

        </div>


      </div>


      <div className='dashboard-layout'>


        {/* Column-3 - Location */}
        <div className="column-new-project-address">
          <div className="dashboard-item location">


            <Map location={location} address={address} />




          </div>
          <div className="address-input-container">
            <input
              type="text" className="address-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter address"
            />
            <button onClick={handleSearch} className="address-button">Search</button>
          </div>

        </div>


        {/* Column 4 */}
        <div className="column-new-project-description">
          <div className="dashboard-item new-project-description" onClick={openDescriptionModal}>
            <span className='after-input-description'>{description || 'Description'}</span>
            {!description && <span>+</span>}
          </div>

          <Modal
            isOpen={showDescriptionModal}
            onRequestClose={closeDescriptionModal}
            contentLabel="Project Description Modal"
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
              },
              content: {
                display: 'flex',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: 'white',
                width: '300px',
                height: '400px',
                margin: 'auto',
                paddingTop: '50px',
                borderRadius: '20px'
              }
            }}
          >
            <form onSubmit={handleSubmitDescription} className="modal-form">
              <label className="modal-label">Project Description</label>
              <textarea value={description} onChange={handleDescriptionChange} className="modal-input-description" />
              <button type="submit" className="modal-button">Done</button>
            </form>

          </Modal>




        </div>


      </div>

      <div className='dashboard-layout'>


        {/* Column 7*/}

      </div>
      <div className="column-final-btn">
        <div className={`final-btn-container ${submissionSuccess ? 'final-btn-container-success' : ''}`}>
          {!submissionSuccess ? (
            <button
              type="submit"
              className="final-submit-button"
              onClick={handleFinalSubmit}
              disabled={isSubmitting}
            >
              Submit
            </button>
          ) : (
            <div className="success-animation">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>







  );
};

export default NewProject;