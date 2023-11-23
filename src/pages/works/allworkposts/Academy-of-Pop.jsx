import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import "./style.css";
import worksData from '../works.json';  
import aFLowerBathData from './A-Flower-Bath.json';
import { ReactComponent as AopHeader } from "../../../assets/svg/Academy-of-Pop/aopheader.svg";
import { ReactComponent as AopTitle } from "../../../assets/svg/Academy-of-Pop/aoptitle.svg";
import { ReactComponent as Row1 } from "../../../assets/svg/Academy-of-Pop/row1.svg";
import { ReactComponent as Row2 } from "../../../assets/svg/Academy-of-Pop/row2.svg";
import { ReactComponent as Row3 } from "../../../assets/svg/Academy-of-Pop/row3.svg";
import { ReactComponent as Asvg } from "../../../assets/svg/Academy-of-Pop/asvg.svg";

import Counter from "../../../counter.jsx";

const AFLowerBath = () => {

 
  let galleryRefs = useRef([]);
  const imageUrls = aFLowerBathData; // Use the goldPrincessData for image URLs
  const [isLoading, setIsLoading] = useState(true);

 // Preload images
 useEffect(() => {
  let loadedImages = 0;
  const totalImages = imageUrls.length;

  const imageLoaded = () => {
    loadedImages++;
    if (loadedImages === totalImages) {
      setIsLoading(false);
    }
  };

  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
    img.onload = imageLoaded;
    img.onerror = imageLoaded;
  });
}, [imageUrls]);

// GSAP animation after images have loaded

  useEffect(() => {
    if (!isLoading) {
    const masterTimeline = gsap.timeline();
  
    // SVG Path Animation
    masterTimeline
      .to("#revealPath", {
        attr: { d: "M0,502S175,272,500,272s500,230,500,230V0H0Z" }, // Intermediate state
        duration: 0.75,
        ease: "Power1.easeIn"
      })
      .to("#revealPath", {
        attr: { d: "M0,2S175,1,500,1s500,1,500,1V0H0Z" }, // Final state
        duration: 0.5,
        ease: "power1.easeOut"
      });
  
    // Staggered Animations for SVG Elements
    masterTimeline.fromTo('.st1', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.1, stagger: 0.1 }, "-=0.25");
    masterTimeline.fromTo('.st2', { scale: 0 }, { scale: 1, duration: 1, stagger: 0.1, ease: 'elastic.out(1, 0.3)' }, "-=0.5");
  
    // Setting initial state for gallery items
    galleryRefs.current.forEach((galleryItem) => {
      gsap.set(galleryItem, { autoAlpha: 0, y: 50 });
    });
  
    // Intersection Observer for gallery items
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px",
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
  
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
  
    galleryRefs.current.forEach((galleryItem) => {
      if (galleryItem) {
        observer.observe(galleryItem);
      }
    });

  
    return () => {
      galleryRefs.current.forEach((galleryItem) => {
        if (galleryItem) {
          observer.unobserve(galleryItem);
        }
      });
      return () => masterTimeline.kill();
    }
  }
  }, [isLoading]); // Dependency on isLoading

  if (isLoading) {
    return <div>

      
    </div>;
  }


  return (

<>
    <div className="svg-overlay">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="revealPath" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
      </div>

    <div className="works">
    <div className="workpage-heading">
     <AopHeader />
      </div>
      <div className="rendering-layout">
<AopTitle />



<div className="rendering-heading">
                <div className="rendering-top-row">
                    <div className="rendering-header">
                        <h2>Branding</h2>
                    </div>
                    {/* <span className="arrow-down works-arrow">↓</span> */}
                </div>
                <div className="rendering-subheader">
                    <h3><br />
                        </h3>
                </div>
            </div>
            <Row1 className="rendering-row" />
            <Row2 className="rendering-row" />
            <Row3 className="rendering-row" />
            
            <div className="rendering-row-video">
  {/* Left Element: Video */}
  <div className="video-container">
    <video width="100%" height="100%" controls>
      <source src="https://mylgcontent.s3.us-west-1.amazonaws.com/02-Academy+of+Pop/00.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Right Element: Existing Content */}
  <div className="right-content">
    <Asvg className="asvg"/>
  </div>
</div>




      </div>
      
    </div>
    </>
  );
};

export default AFLowerBath;
