

const openFinishLineModal = () => {
    if (localActiveProject && localActiveProject.finishline) {
        setSelectedFinishLineDate(localActiveProject.finishline);
    }
    setIsFinishLineModalOpen(true);
};



const handleUpdateFinishLine = () => {
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

useEffect(() => {
    setLocalActiveProject(activeProject);
}, [activeProject]);
