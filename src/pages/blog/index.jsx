import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import allBlogPosts from './allblogposts/allBlogPosts.json'; 
import works from '../works/works.json';   
import BlogPostButton from "./blogpostbutton/BlogPostButton.js";  
import { InfoSection } from "../../components/infosection";
import SingleTicker from "../../components/singleticker";
import BlogCard from "../../components/blogcard";





export const Blog = ({ maxPosts = 17 }) => {

  const [displayedWorks, setDisplayedWorks] = useState([]);
  const displayedPosts = allBlogPosts.slice(0, maxPosts);

  useEffect(() => {
    setDisplayedWorks(works.slice(0, maxPosts)); 
  }, []);
  
  const renderBlogCards = (posts) => {
    let renderedCards = [];
    let currentIndex = 0;
  
    while (currentIndex < posts.length) {
      let position = currentIndex % 7;  // Modulo 7 for a 7-entry pattern

      if (position === 0) {
        renderedCards.push(
          <BlogCard key={currentIndex} {...posts[currentIndex]} layout="row1" />
        );
        currentIndex++;
      } else if (position === 1 || position === 5) {
        renderedCards.push(
          <div className="blog-row double-card-row" key={currentIndex}>
            <BlogCard {...posts[currentIndex]} layout="row2" />
            {posts[currentIndex + 1] && <BlogCard {...posts[currentIndex + 1]} layout="row2" />}
          </div>
        );
        currentIndex += 2;
      } else if (position === 2 || position === 3 || position === 4 || position === 6) {
        // Each 'row3' card will get its own row
        renderedCards.push(
          <div className="blog-row" key={currentIndex}>
            <BlogCard {...posts[currentIndex]} layout="row3" />
          </div>
        );
        currentIndex++; // Increment by 1 to process the next 'row3' post
      } else {
        // Safety condition to prevent infinite loops
        currentIndex++;
      }
    }
  
    return renderedCards;
};

  
  return (
    <HelmetProvider>
    <div className="blog-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Blog </title>
      </Helmet>
      <div className="blog-container">
        <div className="blog-section">
          {renderBlogCards(displayedPosts)}
        </div>

        <div className="works-footer">
          <h1 className="works-footer-title">Works</h1>
        </div>

        <div className="works-titles">

          {displayedWorks.map((work, index) => (
            <div className="blog-title-container" key={index}>
              <BlogPostButton post={work} />
            </div>
          ))}
        
        </div>
      </div>

      </div>

      <hr style={{ opacity: "1", color: "fff", height: "2px", backgroundColor: "#fff" }} />
    
    <InfoSection />
    <hr style={{ opacity: "1", color: "fff", height: "2px", backgroundColor: "#fff" }} />

    <div className="single-ticker-section">

<SingleTicker />
</div>

    </HelmetProvider>
  );
};
