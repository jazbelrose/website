import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";
import "./style.css";
import worksData from '../works.json';
import aFLowerBathData from './A-Flower-Bath.json';
import { ReactComponent as WorksHeader } from "../../../assets/svg/aflowerbathheader.svg";

const AFLowerBath = () => {


  let galleryRefs = useRef([]);
  const imageUrls = aFLowerBathData;

  // Use the goldPrincessData for image URLs

  // useEffect(() => {
  //   const masterTimeline = gsap.timeline();

  //   // SVG Path Animation
  //   masterTimeline
  //     .to("#revealPath", {
  //       attr: { d: "M0,502S175,272,500,272s500,230,500,230V0H0Z" }, // Intermediate state
  //       duration: 0.75,
  //       ease: "Power1.easeIn"
  //     })
  //     .to("#revealPath", {
  //       attr: { d: "M0,2S175,1,500,1s500,1,500,1V0H0Z" }, // Final state
  //       duration: 0.5,
  //       ease: "power1.easeOut"
  //     });

  //   // Staggered Animations for SVG Elements
  //   masterTimeline.fromTo('.st1', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.1, stagger: 0.1 }, "-=0.25");
  //   masterTimeline.fromTo('.st2', { scale: 0 }, { scale: 1, duration: 1, stagger: 0.1, ease: 'elastic.out(1, 0.3)' }, "-=0.5");

  //   // Setting initial state for gallery items
  //   galleryRefs.current.forEach((galleryItem) => {
  //     gsap.set(galleryItem, { autoAlpha: 0, y: 50 });
  //   });

  //   // Intersection Observer for gallery items
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: "-100px 0px",
  //     threshold: 0
  //   };

  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         gsap.to(entry.target, {
  //           autoAlpha: 1,
  //           y: 0,
  //           ease: "power3.out",
  //           overwrite: "auto"
  //         });
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, observerOptions);

  //   galleryRefs.current.forEach((galleryItem) => {
  //     if (galleryItem) {
  //       observer.observe(galleryItem);
  //     }
  //   });



  //   return () => {
  //     galleryRefs.current.forEach((galleryItem) => {
  //       if (galleryItem) {
  //         observer.unobserve(galleryItem);
  //       }
  //     });
  //     masterTimeline.kill();
  //   };
  // }, [imageUrls]);

  useEffect(() => {
    const handleScroll = () => {
      console.trace("Window scrolled to", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (

    <>
      {/* <div className="svg-overlay">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="revealPath" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
      </div> */}

      <div className="works">
        <div className="workpage-heading">
          <WorksHeader />
        </div>
        <div className="mb-5 po_items_ho">
          {imageUrls.map((imageUrl, i) => (
            <div key={i} className="po_item" ref={(el) => (galleryRefs.current[i] = el)}>
              <div className="img-wrapper">
                <img src={imageUrl}

                />

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AFLowerBath;