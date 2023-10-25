import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Helmet, HelmetProvider } from "react-helmet-async";
import WorksCard from '../../components/workscard';  // Importing the WorksCard component
import worksData from './works.json'; // Adjust the path based on your file structure
import "./style.css";
import { InfoSection } from "../../components/infosection";
import { BlogEntry } from '../../components/blogentry';
import allBlogPosts from '../blog/allblogposts/allBlogPosts.json';
import SingleTicker from "../../components/singleticker";


gsap.registerPlugin(CSSPlugin);

export const Works = () => {
  let galleryRefs = useRef([]);

  useEffect(() => {
    // GSAP animations and intersection observer setup...
    galleryRefs.current.forEach((galleryItem) => {
      gsap.set(galleryItem, { autoAlpha: 0, y: 50 });
    });

    const observerOptions = {
      root: null,
      rootMargin: "-50px 50px",
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            autoAlpha: 1,
            y: 0,
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

    galleryRefs.current.forEach((galleryItem) => {
      if (galleryItem) {
        observer.observe(galleryItem);
      }
    });

    return () => {
      if (galleryRefs.current) {
        galleryRefs.current.forEach((galleryItem) => {
          if (galleryItem) {
            observer.unobserve(galleryItem);
          }
        });
      }
      observer.disconnect();
    };
  }, []);

  return (
    <HelmetProvider>
      <div className="works-container">
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

        <div className="works-wrapper">
          {worksData.map((work, i) => (
            <div
              key={work.id}
              className="works-item"
              ref={(el) => (galleryRefs.current[i] = el)}
            >
              <WorksCard
                tag={work.tag}
                title={work.title}
                subtitle={work.subtitle}
                images={work.images}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="blog-section">
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
