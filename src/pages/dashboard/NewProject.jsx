import React, { useState, useRef } from 'react';
import Modal from 'react-modal';

import Map from "../../components/map";
import { ReactComponent as Snap } from "../../assets/svg/snap.svg";

const NewProject = ({ userName, isNewProjectView }) => {

  const [projectName, setProjectName] = useState('');
  const [budget, setBudget] = useState('');
  const [finishLine, setFinishLine] = useState('');
  const [showFinishLineModal, setShowFinishLineModal] = useState(false);
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFileNames, setSelectedFileNames] = useState("");
  const openFileUploadModal = () => setShowFileUploadModal(true);
  const closeFileUploadModal = () => setShowFileUploadModal(false);





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
    setSelectedFiles(event.target.files);
    setSelectedFileNames(Array.from(event.target.files).map(file => file.name).join(", "));
  };
  


  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let file of selectedFiles) {
      formData.append('files', file);
    }

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    closeFileUploadModal();

  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };





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
            <span>Upload your files</span>
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

          
            <form onSubmit={handleFileUpload} className="modal-form">
              <div className="file-upload-btn" onClick={handleFileButtonClick}>
                Choose Files
              </div>
              <div className="selected-files">
                {selectedFileNames || "No files selected"}
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                className="file-input"
              />
              <button type="submit" className="modal-submit-button">Upload Files</button>
            </form>
          </Modal>








        </div>


      </div>


      <div className='dashboard-layout'>


        {/* Column-3 - Location */}
        <div className="column-5">
          <div className="dashboard-item location">

            {isNewProjectView && !showModal && !showBudgetModal && !showBudgetModal && !showFinishLineModal && !showFileUploadModal && (
              <Map
                location={{ lat: 34.0522, lng: -118.2437 }}
                address="Los Angeles, CA"
              />
            )}


          </div>
        </div>


        {/* Column 4 */}
        <div className="column-4">
          <div className="dashboard-item new-project-floor-plan">
            <span>Floor Plan</span>
            <span>+</span>

          </div>
        </div>


      </div>

      <div className='dashboard-layout'>


        {/* Column 7*/}

      </div>
      <div className="column-7">
        <div className="dashboard-item notes
        ">
          <span>Notes</span>
          <span>+</span>

        </div>


      </div>


    </div>

  );
};

export default NewProject;