import React, { useState, useEffect  } from 'react';
import Modal from 'react-modal';


const ProjectHeader = ({ title, parseStatusToNumber, userId, onProjectDeleted, activeProject }) => {
  
  const [localActiveProject, setLocalActiveProject] = useState(activeProject || {});
  
  const projectInitial = activeProject?.title ? activeProject.title.charAt(0) : '';
 

  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };


  
  const [isTitleModalOpen, setIsTitleModalOpen] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title || '');


 
  const openTitleModal = () => {
    if (localActiveProject) {
      setUpdatedTitle(localActiveProject.title);
      setIsTitleModalOpen(true);
    } else {
      console.error('No active project available');
    }
  };


const handleUpdateTitle = async (e) => {
  e.preventDefault();
  const updatedProject = {
      ...localActiveProject,
      title: updatedTitle
  };

  setLocalActiveProject(updatedProject);
  await updateTitleToAPI(updatedProject.title);
  setIsTitleModalOpen(false);
};


const updateTitleToAPI = async (newTitle) => {

  if (!activeProject || !activeProject.projectId) {
    console.error('Active project or project ID is undefined');
    return;
  }


  const apiUrl = `https://didaoiqxl5.execute-api.us-west-1.amazonaws.com/default/editProject?projectId=${activeProject.projectId}`;

  const payload = { title: updatedTitle };

  try {
      const updateResponse = await fetch(apiUrl, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
      });

      if (!updateResponse.ok) {
        throw new Error('Failed to update Title');
         
      }
      console.log('Title updated successfully in the API');
  } catch (error) {
      console.error('Error updating title:', error);
  }
};


  const handleDeleteProject = async () => {
    if (!activeProject || !activeProject.projectId) {
      console.error("No active project to delete.");
      return;
    }


    const projectId = activeProject.projectId;


    try {
      const deleteResponse = await fetch(`https://drgq4taueb.execute-api.us-west-1.amazonaws.com/default/postProjectToUserId?userId=${userId}&projectId=${projectId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!deleteResponse.ok) {
        throw new Error('Network response was not ok');
      }

      onProjectDeleted(projectId);


    } catch (error) {
      console.error("Error during project deletion:", error.message);
    }

    setIsDeleteModalOpen(false);

  };


  return (
    <div>
      <div className='project-header'>
        <div className='header-content'>
          <div className='left-side'>
            <svg id="InitialSVG" viewBox="0 50 300 300">
              <g>
                <ellipse className="initial-ellipse" cx="141.79" cy="192.67" rx="135" ry="135" />
                <text className="initial" x="141.5" y="185" textAnchor="middle" dominantBaseline="central">
                  {projectInitial.toUpperCase()}
                </text>
              </g>
            </svg>



            <div className='single-project-title' onClick={openTitleModal} style={{ cursor: 'pointer' }}>
            <h2>{localActiveProject ? localActiveProject.title : "Summary"}</h2>
            </div>

            <Modal
               isOpen={isTitleModalOpen}
                onRequestClose={() => setIsTitleModalOpen(false)}
              contentLabel="Edit Project Name"
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.75)'
                },
                content: {

                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  color: 'white',
                  width: '300px',
                  height: '400px',
                  margin: 'auto',
                  paddingTop: '50px',
                  borderRadius: '20px',
                  textAlign: 'center'
                }
              }}
            >
               <h4 style={{ marginBottom: "50px" }} >Edit Project Name</h4>
        <input
            style={{ marginBottom: "150px", height: '45px', borderRadius: '5px', fontSize: '1.2rem' }}
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
        />

        <button style={{ marginRight: "5px", borderRadius: "10px" }} className='modal-button' onClick={handleUpdateTitle}>Save</button>
        <button style={{ borderRadius: "10px" }} className='modal-button' onClick={() => setIsTitleModalOpen(false)}>Cancel</button>
    </Modal>



            <svg id="StatusSVG" viewBox="0 00 400 400">
              <text className="project-status" transform={`translate(${activeProject?.status !== '100%' ? 475 - 400 : 456.58 - 400} 375.21)`}>
                <tspan x="22.5" y="-136">{activeProject?.status || '0%'}</tspan>
              </text>
              {activeProject && (
                <ellipse
                  cx="200"
                  cy="200"
                  rx="160"
                  ry="160"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="15"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    from="0, 1004"
                    to={`${parseStatusToNumber(activeProject.status) / 100 * 1002}, 1004`}
                    dur="1s"
                    begin="0s"
                    fill="freeze"
                  />
                </ellipse>
              )}
            </svg>

          </div>

          <div className='right-side'>

            <svg id="trash" onClick={toggleDeleteModal} viewBox="0 0 32 32" style={{ cursor: 'pointer' }}>
              <path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z" fill="#ffffff"></path>

            </svg>

            <Modal
              isOpen={isDeleteModalOpen}
              onRequestClose={toggleDeleteModal}
              contentLabel="Delete Project Modal"
              ariaHideApp={false}
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.75)'
                },
                content: {

                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  color: 'white',
                  width: '300px',
                  height: '300px',
                  margin: 'auto',
                  paddingTop: '50px',
                  borderRadius: '20px',
                  textAlign: 'center'
                }
              }}
            >
              <h4 style={{ marginBottom: "75px" }}>Are you sure you want to delete this project?</h4>
              <button className='modal-button' style={{ marginRight: "5px", borderRadius: "10px" }}  onClick={handleDeleteProject}>Ok</button>
              <button className='modal-button'style={{ borderRadius: "10px" }}  onClick={toggleDeleteModal}>Cancel</button>
            </Modal>





          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
