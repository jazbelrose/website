import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';



const DescriptionComponent = ({ activeProject }) => {


    const [localActiveProject, setLocalActiveProject] = useState(activeProject || {});
    const [selectedDescription, setSelectedDescription] = useState("");
    const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);




    const openDescriptionModal = () => {
        if (localActiveProject && localActiveProject.description) {
            setSelectedDescription(localActiveProject.description);
        }
        setIsDescriptionModalOpen(true);
    };



    const handleUpdateDescription = (e) => {
        e.preventDefault();

        const updatedProject = {
            ...localActiveProject,
            description: selectedDescription
        };

        setLocalActiveProject(updatedProject);
        setIsDescriptionModalOpen(false);
        updateDescriptionToAPI(updatedProject.finishline);
    };




    const updateDescriptionToAPI = async () => {
        const apiUrl = `https://didaoiqxl5.execute-api.us-west-1.amazonaws.com/default/editProject?projectId=${activeProject.projectId}`;
        const payload = {
            description: selectedDescription
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log('Description updated successfully');
                const updatedProject = { ...activeProject, description: selectedDescription };

            } else {
                console.error('Failed to update description');
            }
        } catch (error) {
            console.error('Error updating description:', error);
        }

        setIsDescriptionModalOpen(false); // Close the modal
    };




    return (

        <div className="column-7">
            <div className="dashboard-item notes" onClick={openDescriptionModal}>
                <span>{localActiveProject.description || 'Description'}</span>

            </div>

            <Modal
                isOpen={isDescriptionModalOpen}
                onRequestClose={() => setIsDescriptionModalOpen(false)}
                contentLabel="Description Modal"
                style={{
                    overlay: {
                        

    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                    content: {

                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        color: 'white',
                       
                        width: '300px',
                        height: '450px',
                        margin: 'auto',

                        borderRadius: '20px'
                    }
                }}
            >
                <form onSubmit={handleUpdateDescription} className="modal-form">
                    <textarea
                        style={{ borderRadius: "5px", marginBottom: "20px", width: "275px", height: "300px" }}
                        value={selectedDescription}
                        onChange={(e) => setSelectedDescription(e.target.value)}
                        className="modal-input"
                        rows={4} // Adjust the number of rows as needed
                        cols={40} // Adjust the number of columns as needed
                    />

                    <button style={{ borderRadius: "10px" }} type="submit" className="modal-button">Update Description</button>
                </form>
            </Modal>

        </div>


    );
};



export default DescriptionComponent;



