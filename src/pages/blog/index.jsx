import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import allBlogPosts from './allblogposts/allBlogPosts.json';  
import BlogPostButton from "./blogpostbutton/BlogPostButton.js";  
import { InfoSection } from "../../components/infosection";
import SingleTicker from "../../components/singleticker";




export const Blog = ({ maxPosts = 20 }) => {
  const displayedPosts = allBlogPosts.slice(0, maxPosts);
  
  
  
  return (
    <HelmetProvider>
      <div className="container-fluid">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Blog </title>
        </Helmet>



<div className="blog-container">



        <div className="works-footer">
          <h1 className="works-footer-title">Works</h1>
        </div>
        <div className="works-titles">
          {displayedPosts.map((post, index) => (
            <div className="blog-title-container" key={index}>
              <BlogPostButton post={post} />
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
