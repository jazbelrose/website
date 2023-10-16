import React from 'react';
import './style.css';


function PortfolioCard(props) {
  return (
    <div className={`portfolio-card ${props.className}`}>
      <img src={props.imageSrc} alt={props.imageAlt} className="card-image"/>
      <div className="top-left title"><h3 className="title">{props.title}</h3><h3 className="subtitle">{props.subtitle}</h3></div>
      <div className="bottom-left description"><p className="portfolio-description">{props.description}</p></div>
    </div>
  );
}

export default PortfolioCard;
