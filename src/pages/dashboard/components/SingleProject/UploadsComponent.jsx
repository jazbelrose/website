

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const UploadsComponent = ({ activeProject }) => {


const [isUploadsModalOpen, setUploadsModalOpen] = useState(false);
const [selectedUploads, setSelectedUploads] = useState([]);

const openUploadsModal = () => { setUploadsModalOpen(true); setSelectedUploads(activeProject.uploads || []); };
const closeUploadsModal = () => { setUploadsModalOpen(false); };




return (

    <>
<div className="dashboard-item uploads" onClick={openUploadsModal}>
<span>Uploads</span>
<span>></span>
</div>

<Modal
isOpen={isUploadsModalOpen}
onRequestClose={closeUploadsModal}
contentLabel="Uploads Modal"
style={{
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
        display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        color: 'white',
        width: '400px',
        height: '400px',
        margin: 'auto',
        paddingTop: '50px',
        borderRadius: '20px'
    }
}}
><form className="modal-form">
    <div className="uploads-modal-content">
        <div className="single-project-selected-files">
            <ul>
                {selectedUploads.map((upload, index) => (
                    <li key={index}>{upload.fileName}</li>
                ))}
            </ul>
        </div>

        <button className="modal-submit-button" onClick={closeUploadsModal}>Close</button>
    </div>
</form>
</Modal>

</>

);
};

export default UploadsComponent;
