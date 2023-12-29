import React from 'react';
import './style.css';

function PortfolioCard(props) {
  return (
    <div className={`portfolio-card ${props.className}`}>
      {/* Wrap the image with an anchor tag */}
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.imageSrc} alt={props.imageAlt} className="card-image"/>
      </a>
      <div className="top-left title">
        <h3 className="title">{props.title}</h3>
        <h3 className="subtitle">{props.subtitle}</h3>
      </div>
      <div className="bottom-left description">
        <span className="portfolio-description">{props.description}</span>
      </div>
    </div>
  );
}

export default PortfolioCard;
