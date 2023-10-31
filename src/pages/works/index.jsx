import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Helmet, HelmetProvider } from "react-helmet-async";

import worksData from './works.json'; // Adjust the path based on your file structure

import "./style.css";
import { InfoSection } from "../../components/infosection";
import { BlogEntry } from '../../components/blogentry';
import allBlogPosts from '../blog/allblogposts/allBlogPosts.json';
import SingleTicker from "../../components/singleticker";
import BlogCard from "../../components/blogcard";


gsap.registerPlugin(CSSPlugin);

export const Works = ({ maxPosts = 45 }) => {

  let blogPostRefs = useRef([]);
  let worksRefs = useRef([]);
  const [displayedWorks, setDisplayedWorks] = useState(worksData.slice(0, maxPosts));



  useEffect(() => {
    console.log("Current worksRefs:", worksRefs.current);
  }, [displayedWorks]);


  useLayoutEffect(() => {
    setTimeout(() => {

      blogPostRefs.current.forEach((galleryItem, index) => {
        if (index < 2) {

          gsap.set(galleryItem, { autoAlpha: 1, y: 0, scale: 1 });
        } else {
          // For the rest, set their initial state to be invisible
          gsap.set(galleryItem, { autoAlpha: 0, y: 50, scale: 0.8 });
        }
      });

      worksRefs.current.forEach((workItem) => {
        gsap.set(workItem, { autoAlpha: 0, y: 50, scale: 0.8 });
      });

      gsap.to(blogPostRefs.current[0], { autoAlpha: 1, y: 0, scale: 1, ease: "power3.out", overwrite: "auto" });

      const observerOptions = {
        root: null,
        rootMargin: "-50px 50px",
        threshold: 0.1
      };


      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          console.log("Observed:", entry.target);  // Debugging line
          if (entry.isIntersecting) {
            console.log("Animating:", entry.target);  // Debugging line
            const tl = gsap.timeline();
            tl.to(entry.target, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              ease: "power3.out",
              overwrite: "auto"
            });
          }
        });
      };


      const observer = new IntersectionObserver(
        handleIntersection,
        observerOptions
      );

      blogPostRefs.current.forEach((blogItem) => {
        if (blogItem) {
          observer.observe(blogItem);
        }
      });

      worksRefs.current.forEach((workItem) => {
        if (workItem) {
          observer.observe(workItem);
        }
      });



      return () => {
        if (blogPostRefs.current) {
          blogPostRefs.current.forEach((blogItem) => {
            if (blogItem) {
              observer.unobserve(blogItem);
            }
          });
        }

        if (worksRefs.current) {
          worksRefs.current.forEach((workItem) => {
            if (workItem) {
              observer.unobserve(workItem);
            }
          });
        }
        observer.disconnect();
      };

    }, 100);
  }, []);

  useEffect(() => {
    setDisplayedWorks(worksData.slice(0, maxPosts));
  }, []);



  const renderWorks = (works) => {
    let renderedCards = [];
    let currentIndex = 0;
  
    while (currentIndex < works.length) {
      let position = currentIndex % 7;  // Modulo 7 for the desired pattern with double card
  
      switch (position) {
        case 0:
          renderedCards.push(
            <BlogCard type="works" className="works-row1-card"  key={currentIndex} {...works[currentIndex]} layout="row1" />
          );
          currentIndex++;
          break;
        case 1:
          renderedCards.push(
            <BlogCard type="works" className="works-row3-card" key={currentIndex} {...works[currentIndex]} layout="row3" />
          );
          currentIndex++;
          break;
        case 2:
          renderedCards.push(
            <BlogCard type="works" key={currentIndex} {...works[currentIndex]} layout="row4" />
          );
          currentIndex++;
          break;
        case 3: // Double card
        case 4:
          renderedCards.push(
            <div className="blog-row double-card-row" key={currentIndex}>
              <BlogCard {...works[currentIndex]} layout="row2" />
              {works[currentIndex + 1] && <BlogCard {...works[currentIndex + 1]} layout="row2" />}
            </div>
          );
          currentIndex += 2; 
          break;
        case 5:
          renderedCards.push(
            <BlogCard type="works" key={currentIndex} {...works[currentIndex]} layout="row4" />
          );
          currentIndex++;
          break;
        case 6:
          renderedCards.push(
            <BlogCard type="works" className="works-row3-card" key={currentIndex} {...works[currentIndex]} layout="row3" />
          );
          currentIndex++;
          break;
        default:
          break;
      }
    }
  
    return renderedCards.map((card, index) => (
      <div key={index} ref={(el) => { blogPostRefs.current[index] = el; }}>
        {card}
      </div>
    ));
  };
  



  return (
    <HelmetProvider>
        <div className="workspage-container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Work</title>
            </Helmet>
            
            <div className="works-heading">
                <div className="works-top-row">
                    <div className="works-header">
                        <h2>Our Work</h2>
                    </div>
                    <span className="arrow-down works-arrow">↓</span>
                </div>
                <div className="works-subheader">
                    <h3>Purposeful branding & <br />
                        immersive digital</h3>
                </div>
            </div>

            <div className="works-container" ref={(el) => { blogPostRefs.current[0] = el; }}>
                <div className="blog-section">
                    {renderWorks(displayedWorks)}
                </div>
            </div>


</div>


            <div className="footer-blog-section">
                <div className="blog-header">
                    <h2>Blog</h2>
                    <span className="arrow-down blog-arrow">↓</span>
                </div>
                <div className="blog-grid">
                    {allBlogPosts.slice(5, 10).map((post, index) => (
                        <BlogEntry key={index} post={post} />
                    ))}
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
