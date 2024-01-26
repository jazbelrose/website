import React from "react";
import Modal from "react-modal"

const NewProjectUploadFiles = ({selectedFiles, setSelectedFiles, selectedFileNames, setSelectedFileNames}) => {
const [showFileUploadModal, setShowFileUploadModal] = React.useState(false);
const openFileUploadModal = () => setShowFileUploadModal(true);
const closeFileUploadModal = () => setShowFileUploadModal(false);
const fileInputRef = React.useRef(null);




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


  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>

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

    </>

  )
  }
  
  export default NewProjectUploadFiles;
