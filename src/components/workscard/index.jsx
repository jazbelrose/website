import React from 'react';
import './style.css';
import { ScrambleButton } from "../scramblebutton";

function WorksCard(props) {
  return (
    <div className={`works-card ${props.className}`}>
      <div className="works-left-column works-top-left works-title">
        {/* Convert the tag array to a comma and space separated string */}
        <span className="works-tag">{props.tag.join(', ')}</span>
        <h3 className="works-title">{props.title}</h3>
        <h3 className="works-subtitle">{props.subtitle}</h3>
        <ScrambleButton text="View Project → " to={props.projectLink} />
      </div>
      <div className="works-right-column">
        <img src={props.images[0]} alt={props.title} className="card-image"/>
      </div>
    </div>
  );
}

export default WorksCard;
