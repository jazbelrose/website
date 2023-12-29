import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function PortfolioCard(props) {
  return (
    // Wrap the entire card with Link
    <Link to={props.linkUrl} className={`portfolio-card ${props.className}`}>
      <img src={props.imageSrc} alt={props.imageAlt} className="card-image"/>
      <div className="top-left title">
        <h3 className="title">{props.title}</h3>
        <h3 className="subtitle">{props.subtitle}</h3>
      </div>
      <div className="bottom-left description">
        <span className="portfolio-description">{props.description}</span>
      </div>
    </Link>
  );
}

export default PortfolioCard;
