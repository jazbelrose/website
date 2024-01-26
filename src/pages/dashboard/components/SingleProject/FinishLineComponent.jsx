import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';


const FinishLineComponent = ({ activeProject, setLocalActiveProject, localActiveProject }) => {
    
    const [selectedFinishLineDate, setSelectedFinishLineDate] = useState("");
    const [isFinishLineModalOpen, setIsFinishLineModalOpen] = useState(false);




    const openFinishLineModal = () => {
        if (localActiveProject && localActiveProject.finishline) {
            setSelectedFinishLineDate(localActiveProject.finishline);
        }
        setIsFinishLineModalOpen(true);
    };



    const handleUpdateFinishLine = (e) => {
        e.preventDefault(); 
        const updatedProject = {
            ...localActiveProject,
            finishline: selectedFinishLineDate
        };

        setLocalActiveProject(updatedProject);
        setIsFinishLineModalOpen(false);
        updateFinishLineToAPI(updatedProject.finishline);
    };




    const updateFinishLineToAPI = async () => {
        const apiUrl = `https://didaoiqxl5.execute-api.us-west-1.amazonaws.com/default/editProject?projectId=${activeProject.projectId}`;
        const payload = {
            finishline: selectedFinishLineDate
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log('Finish line updated successfully');
                const updatedProject = { ...activeProject, finishline: selectedFinishLineDate };

            } else {
                console.error('Failed to update finish line');
            }
        } catch (error) {
            console.error('Error updating finish line:', error);
        }

        setIsFinishLineModalOpen(false); // Close the modal
    };


    return (

        <>
            <div className="dashboard-item finish-line" onClick={openFinishLineModal}>
                <span>Finish line</span>
                <span>{localActiveProject?.finishline || 'Date not available'}</span>
            </div>

            <Modal
                isOpen={isFinishLineModalOpen}
                onRequestClose={() => setIsFinishLineModalOpen(false)}
                contentLabel="Finish Line Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        color: 'white',
                        width: '300px',
                        height: '250px',
                        margin: 'auto',
                        paddingTop: '50px',
                        borderRadius: '20px'
                    }
                }}
            >
                <form onSubmit={handleUpdateFinishLine} className="modal-form">
                    <input
                        type="date"
                        value={selectedFinishLineDate}
                        onChange={(e) => setSelectedFinishLineDate(e.target.value)}
                        className="modal-input"
                    />
                    <button type="submit" className="modal-button">Update Finish Line</button>
                </form>
            </Modal>


        </>

    );
};

export default FinishLineComponent;
