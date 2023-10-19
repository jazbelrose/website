import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ScrambleText from "scramble-text";
import { Helmet, HelmetProvider } from "react-helmet-async";
import allBlogPosts from './blogposts/allBlogPosts.json';  

const BlogPost = ({ post }) => {
  const containerRef = useRef(null);
  let scrambleInstance = null;

  const handleMouseEnter = () => {
    const h2Elem = containerRef.current;
    const scrambledElem = h2Elem.querySelector(".scrambled");
    if (scrambledElem && !scrambleInstance) {
      // Lock the width of the h2 element
      h2Elem.style.width = `${h2Elem.offsetWidth}px`;

      scrambleInstance = new ScrambleText(scrambledElem, {
        timeOffset: 12.5,
        chars: ["o", "¦"],
        callback: () => {
          // Reset the width of the h2 element after scramble
          h2Elem.style.width = "auto";
          scrambleInstance = null;
        }
      });
      scrambleInstance.start().play();
    }
  };

  return (
    <Link to={`/blog/${post.slug}`}>
      <h2
        ref={containerRef}
        className="h2 blog-element"
        onMouseEnter={handleMouseEnter}
      >
        <span className="scrambled">{post.title}</span>
      </h2>
    </Link>
  );
};

export const Blog = ({ maxPosts = 20 }) => {
  const displayedPosts = allBlogPosts.slice(0, maxPosts);
  return (
    <HelmetProvider>
      <div className="container-fluid">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Blog </title>
        </Helmet>

        <div className="reads">
          <h1 id="reads-title">Reads</h1>
        </div>
        <div className="blog-titles">
          {displayedPosts.map((post, index) => (
            <div className="blog-title-container" key={index}>
              <BlogPost post={post} />
            </div>
          ))}
          {maxPosts < allBlogPosts.length && (
            <div className="reads-container">
              <a
                href="https://belroselax.com/blog"
                className="h2  blog-element "
              >
                All
              </a>
            </div>
          )}
        </div>
      </div>
    </HelmetProvider>
  );
};
