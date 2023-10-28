import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import allBlogPosts from './allblogposts/allBlogPosts.json';
import works from '../works/works.json';
import BlogPostButton from "./blogpostbutton/BlogPostButton.js";
import { InfoSection } from "../../components/infosection";
import SingleTicker from "../../components/singleticker";
import BlogCard from "../../components/blogcard";
gsap.registerPlugin(CSSPlugin);





export const Blog = ({ maxPosts = 17 }) => {

  let blogPostRefs = useRef([]);
  let worksRefs = useRef([]);
  const [displayedWorks, setDisplayedWorks] = useState([]);
  const displayedPosts = allBlogPosts.slice(0, maxPosts);

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

    return renderedCards.map((card, index) => (
      <div key={index} ref={(el) => { blogPostRefs.current[index] = el; }}>
        {card}
      </div>
    ));

  };

  return (
    <HelmetProvider>
      <div className="blog-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Blog </title>
        </Helmet>
        <div className="blog-container" ref={(el) => { blogPostRefs.current[0] = el; }}>


          <div className="blog-section">
            {renderBlogCards(displayedPosts)}
          </div>

          <div className="works-footer">
            <h1 className="works-footer-title">Works</h1>
          </div>

          <div className="works-titles">

            {displayedWorks.map((work, index) => (
              <div className="blog-title-container" key={index} ref={(el) => {
                if (el && !worksRefs.current.includes(el)) { // Only add if it's a new element
                  worksRefs.current[index] = el;
                }
              }}
              >



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
