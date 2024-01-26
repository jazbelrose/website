


import React from 'react';
import { ReactComponent as Snap } from "../../../../assets/svg/snap.svg";


const NewProjectHeader = ({ userName }) => {
    return (
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
    );
  };
  
  export default NewProjectHeader;
  