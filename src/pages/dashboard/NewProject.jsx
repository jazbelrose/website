import React, { useState } from 'react';
import Map from "../../components/map";
import { ReactComponent as Snap } from "../../assets/svg/snap.svg";

const NewProject = ({ userName, isNewProjectView }) => {

  const [projectName, ] = useState('');
  const [budget, ] = useState('');
  
  const activeProjectLocation = activeProject ? activeProject.location : null;
  const [activeProject,] = useState(null);

  


  const handleSubmit = () => {
    
    console.log("Submitting New Project:", projectName, budget);
    
  };

  return (

    <div className="active-project-details">
      <div className='new-project-header'>
        <h2>New Project</h2>
      </div>

      {/*  Greetings  */}


      <div className="column-0">



        <div className="dashboard-item greetings">

          <div className="greetings-text">
            <span className="greeting-line">Hello <span className="username"> {userName} </span> !</span>
            <span className="greeting-line">Let’s get a new project started!</span>
            <span className="greeting-line">Upload floorplans, create your design notes, drop links... Upload files, inspiration images and just submit!</span>

          </div>

          <div className="snap-container">
          <Snap className="new-project-snap" />
          </div>
        </div>


        <div className="dashboard-item project-name">
          <span>Project Name</span>
          <span>+</span>

        </div>

      </div>




      <div className='dashboard-layout'>


        {/* Column 1 */}

        <div className="new-project-col1">



          <div className="dashboard-item new-project-budget">
            <span>Budget</span>
            <span>+</span>
          </div>

          <div className="dashboard-item new-project-finish-line">
            <span>Finish Line</span>
            <span>+</span>
          </div>
        </div>




        {/* Column 2 */}

        <div className="new-project-col2">

          <div className="dashboard-item new-project-uploads">
            <span>Upload your files</span>
            <span>+</span>
          </div>


        </div>


      </div>


      <div className='dashboard-layout'>


        {/* Column-3 - Location */}
        <div className="column-5">
          <div className="dashboard-item location">
          
          {isNewProjectView &&
            <Map
              location={{ lat: 34.0522, lng: -118.2437 }} // Coordinates for Los Angeles
              address="Los Angeles, CA"
            />
          }
          </div>
        </div>


        {/* Column 4 */}
        <div className="column-4">
          <div className="dashboard-item new-project-floor-plan">
            <span>Floor Plan</span>
            <span>+</span>

          </div>
        </div>


      </div>

      <div className='dashboard-layout'>


        {/* Column 7*/}

      </div>
      <div className="column-7">
        <div className="dashboard-item notes
        ">
          <span>Notes</span>
          <span>+</span>

        </div>


      </div>


      </div>
    
  );
};

export default NewProject;