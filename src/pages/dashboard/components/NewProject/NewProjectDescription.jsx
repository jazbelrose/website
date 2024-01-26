import React from "react";
import Modal from 'react-modal';


const NewProjectDescription = ({ description, setDescription }) => {

    const [showDescriptionModal, setShowDescriptionModal] = React.useState(false);
    const openDescriptionModal = () => setShowDescriptionModal(true);
    const closeDescriptionModal = () => setShowDescriptionModal(false);
    const handleDescriptionChange = (e) => setDescription(e.target.value);


    const handleSubmitDescription = (e) => {
        e.preventDefault();
        console.log("Description Set:", description);
        closeDescriptionModal();
    };



    return (
        <>
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


        </>
    )




}

export default NewProjectDescription;