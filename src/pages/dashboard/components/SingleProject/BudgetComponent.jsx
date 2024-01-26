import React, { useState, useEffect  } from 'react';
import Modal from 'react-modal';

const BudgetComponent = ({ budget, activeProject, setLocalActiveProject, localActiveProject }) =>  {

  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [updatedBudget, setUpdatedBudget] = useState({ date: budget?.date || '', total: budget?.total || '' });
  const [selectedDate, setSelectedDate] = useState(budget?.date || '');  // Define selectedDate here
  


  
  const openBudgetModal = () => {

    if (localActiveProject && localActiveProject.budget) {
        
        setUpdatedBudget({
            total: localActiveProject.budget.total,
            date: localActiveProject.budget.date // If there's a budget date in the object
        });
        setSelectedDate(localActiveProject.budget.date);
    }
    setIsBudgetModalOpen(true);
};

const handleUpdateBudget = () => {
    const updatedProject = {
        ...localActiveProject,
        budget: { ...updatedBudget, date: selectedDate }
    };


    setLocalActiveProject(updatedProject);
    setIsBudgetModalOpen(false);
    updateBudgetToAPI(updatedProject.budget);
};


  
const handleBudgetSubmit = (e) => {
    e.preventDefault();
    handleUpdateBudget(); // Call handleUpdateBudget to perform the state update
    setIsBudgetModalOpen(false);
    updateBudgetToAPI(localActiveProject.projectId, updatedBudget);
  };



  const updateBudgetToAPI = async () => {

    if (!activeProject || !activeProject.projectId) {
        console.error('Active project or project ID is undefined');
        return;
      }


    const apiUrl = `https://didaoiqxl5.execute-api.us-west-1.amazonaws.com/default/editProject?projectId=${activeProject.projectId}`;

    const payload = {
        budget: {
            ...updatedBudget,
            date: selectedDate
        }
    };

    try {
        const updateResponse = await fetch(apiUrl, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!updateResponse.ok) {
            throw new Error('Failed to update budget');
        }
        console.log('Budget updated successfully in the API');
    } catch (error) {
        console.error('Error updating budget:', error);
    }
};




  return (
    <div>
       <div className="dashboard-item budget" onClick={openBudgetModal}>
                        <span>Budget</span>
                        <span>
                            ${localActiveProject.budget && localActiveProject.budget.total ? localActiveProject.budget.total : 'Not available'}
                        </span>
                        <span>{localActiveProject.budget && localActiveProject.budget.date}</span>
                    </div>

                    <Modal
                        isOpen={isBudgetModalOpen}
                        onRequestClose={() => setIsBudgetModalOpen(false)}
                        contentLabel="Budget Modal"
                        style={{
                            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
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
                        <form onSubmit={handleBudgetSubmit} className="modal-form">
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="modal-input"
                            />
                            <input
                                type="text"
                                value={updatedBudget.total}
                                onChange={(e) => setUpdatedBudget({ ...updatedBudget, total: e.target.value })}
                                placeholder="Budget Total"
                                className="modal-input"
                            />
                            <button type="submit" className="modal-button">Update Budget</button>
                        </form>
                    </Modal>
    </div>
  );
};

export default BudgetComponent;
