
import React from "react"
import Modal from "react-modal"

const NewProjectName = ({ projectName, setProjectName }) => {
    
    const [showModal, setShowModal] = React.useState(false)

  const handleProjectNameClick = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Project Name Set:", projectName);
    closeModal()
  }

  return (

<>

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

</>

)
}


export default NewProjectName