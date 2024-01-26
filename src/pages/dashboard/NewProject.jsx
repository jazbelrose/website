import React, { useState, useRef } from 'react';
import Modal from 'react-modal';


import { uploadData } from 'aws-amplify/storage';
import NewProjectHeader from './components/NewProject/NewProjectHeader';
import ProjectName from './components/NewProject/NewProjectName';
import NewProjectBudget from './components/NewProject/NewProjectBudget';
import NewProjectFinishline from './components/NewProject/NewProjectFinishLine';
import NewProjectUploadFiles from './components/NewProject/NewProjectUploadFiles';
import NewProjectAddress from './components/NewProject/NewProjectAddress';
import NewProjectDescription from './components/NewProject/NewProjectDescription';


const NewProject = ({ userName, userId, isNewProjectView, onProjectCreated }) => {

  const [projectName, setProjectName] = useState('');
  const [budget, setBudget] = useState('');
  const [finishline, setFinishLine] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFileNames, setSelectedFileNames] = useState("");
  const [location, setLocation] = useState({ lat: 34.0522, lng: -118.2437 });
  const [address, setAddress] = useState('Los Angeles, CA');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);


  const collectFormData = () => {


    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;


    return {
      TableName: "Projects",
      Item: {

        title: projectName,
        date: formattedDate,
        dateCreated: formattedDate,
        milestone: '10',
        finishline: finishline,
        description: description,
        location: location,
        address: address,
        budget: {
          date: formattedDate,
          total: budget || '0'
        },
        contact: {
          contact: 'N/A',
          name: 'N/A',
          phone: 'N/A'
        },
        finishline: finishline || formattedDate,
        gallery: '/path/to/gallery',
        invoiceDate: formattedDate,
        invoices: '/path/to/invoices',
        slug: 'project-slug',
        status: '10%',
        tags: [],
        team: [],
        revisionHistory: [],
        thumbnails: [],
        downloads: [],
        uploads: []

      }
    };
  };


  const handleFileUpload = async (projectId) => {
    const uploadedFileUrls = []; 

    try {
      for (let file of selectedFiles) {
        const filename = `projects/${projectId}/uploads/${file.name}`;

        const result = await uploadData({
          key: filename,
          data: file,
          options: {
            accessLevel: 'protected',
          }
        });

        console.log('File uploaded:', result);
        // Construct the file URL and add it to the array
        const fileUrl = `https://mylguserdata194416-dev.s3.us-west-1.amazonaws.com/protected/us-west-1%3A33762779-d3a2-c552-0eca-a287c4438602/${filename}`;
        uploadedFileUrls.push({ fileName: file.name, url: fileUrl });
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      
    }

    return uploadedFileUrls; 
  };








  const handleFinalSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const initialProjectData = collectFormData();

    try {

      const createResponse = await fetch('https://any6qedkud.execute-api.us-west-1.amazonaws.com/default/PostProjects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(initialProjectData),
      });

      if (!createResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await createResponse.json();
      const realProjectId = data.projectId;

      const updateUserProfileResponse = await fetch(`https://drgq4taueb.execute-api.us-west-1.amazonaws.com/default/postProjectToUserId?TableName=userProfiles&userId=${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newProjectId: realProjectId }),
      });

      if (!updateUserProfileResponse.ok) {
        throw new Error('Error updating user profile with new project ID');
      }


      console.log("User profile updated with new project.");



      const uploadedFileUrls = await handleFileUpload(realProjectId);


      const updateData = {
        uploads: uploadedFileUrls
      };


      const updateResponse = await fetch(`https://any6qedkud.execute-api.us-west-1.amazonaws.com/default/PostProjects?TableName=Projects&projectId=${realProjectId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData), // Update this line
      });

      if (!updateResponse.ok) {
        throw new Error('Error updating project with file URLs');
      }

      const newProject = {
        ...initialProjectData.Item,
        projectId: realProjectId,
        uploads: uploadedFileUrls

      };




      console.log("Success!");


      setIsSubmitting(false);
      setSubmissionSuccess(true);
      setTimeout(() => {
      onProjectCreated(newProject);

      }, 2000);



    } catch (error) {
      console.error('There was an error with the submission:', error);

    } finally {
      setIsSubmitting(false);
    }
  };

  



  return (

    <div className="active-project-details">
      <div className='new-project-header'>
        <h2>New Project</h2>
      </div>


      <div className="column-0">


        <NewProjectHeader userName={userName} />
        <ProjectName projectName={projectName} setProjectName={setProjectName} />


      </div>

      <div className='dashboard-layout'>
    
        <div className="new-project-col1">

          <NewProjectBudget budget={budget} setBudget={setBudget} />
          <NewProjectFinishline finishline={finishline} setFinishLine={setFinishLine} /> 

        </div>

        <div className="new-project-col2">

         <NewProjectUploadFiles selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} selectedFileNames={selectedFileNames} setSelectedFileNames={setSelectedFileNames} />

        </div>


      </div>


      <div className='dashboard-layout'>

        <NewProjectAddress location={location} setLocation={setLocation} address={address} setAddress={setAddress} />
        <NewProjectDescription description={description} setDescription={setDescription} />
        




      </div>

      <div className='dashboard-layout'>


      </div>
      <div className="column-final-btn">
        <div className={`final-btn-container ${submissionSuccess ? 'final-btn-container-success' : ''}`}>
          {!submissionSuccess ? (
            <button
              type="submit"
              className="final-submit-button"
              onClick={handleFinalSubmit}
              disabled={isSubmitting}
            >
              Submit
            </button>
          ) : (
            <div className="success-animation">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>







  );
};

export default NewProject;