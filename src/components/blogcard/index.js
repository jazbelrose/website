import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import { ScrambleButton } from "../scramblebutton";
function BlogCard({ title, description, slug, date, tags, readingTime, layout, images, authorName }) {
  return (
    <div className={`blog-card ${layout}`}>
      {layout === "row1" && (
        <>
        <div className="row1-image">
    <img src={images[0]} alt={title} className="card-image"/>
</div>
          <div className="row1-content">
            <div className="column1">
              <h3 className="blog-title">{title}</h3>
              <p className="blog-description">{description}</p>
              {tags && <span className="blog-tag">{tags.join(', ')}</span>}
            </div>
            <div className="column2">
              <ScrambleButton text="Read More →" to={`/blog/${slug}`} />
              <div className="blog-date-time">
                <p className="blog-date">{date}</p>
                <p className="blog-reading-time">{readingTime} min read</p>
              </div>
            </div>
          </div>
        </>
      )}

      {layout === "row2" && (

        <>
      
          <div className="tag-row">{tags && <span className="blog-tag">{tags.join(', ')}</span>}</div>
          <div className="row2-image">
          <Link to={`/blog/${slug}`}>
                <img src={images[0]} alt={title} className="card-image"/>
            </Link>
</div>
          <div className="content-row">
            <div className="column1">
              <h3 className="blog-title">{title}</h3>
             
              <p className="blog-name">By <span style={{color: '#FA3356'}}>{authorName}</span></p>
            </div>
            <div className="column2">
              <div className="blog-date-time">
                <p className="blog-date">{date}</p>
                <p className="blog-reading-time">{readingTime} min read</p>
              </div>
            </div>
          </div>
        
          </>
      )}

      {layout === "row3" && (
        <>
          <div className="column1">
          <div className="top-content">
            {tags && <span className="blog-tag">{tags.join(', ')}</span>}
            <h3 className="blog-title">{title}</h3>
            <h3 className="blog-description">{description}</h3>
            <ScrambleButton text="Read More →" to={`/blog/${slug}`} />
            </div>
            
            <div className="blog-date-time">
              <p className="blog-name">By <span style={{color: '#FA3356'}}>{authorName}</span></p>
              <p className="blog-date">{date}</p>
              <p className="blog-reading-time">{readingTime} min read</p>
            </div>
          </div>
          <div className="image-column2"><img src={images[0]} alt={title} className="card-image"/></div>
        </>
      )}

     
    </div>
  );
}

export default BlogCard;
