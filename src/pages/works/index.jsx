import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Helmet, HelmetProvider } from "react-helmet-async";
import WorksCard from '../../components/workscard';  // Importing the WorksCard component
import worksData from './works.json'; // Adjust the path based on your file structure
import "./style.css";

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
      threshold: 0
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
          <title>Works</title>
        </Helmet>

        <div className="works-wrapper">
          {worksData.map((work, i) => (
            <div
              key={work.id}
              className="po_item"
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
    </HelmetProvider>
  );
};
