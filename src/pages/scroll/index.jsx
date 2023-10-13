import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import disciplinesData from "./disciplines.json";


gsap.registerPlugin(ScrollTrigger);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const Scroll = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const scrollingContainerRef = useRef(null);
  const scrollingContainerRef1 = useRef(null);
  const scrollingContainerRef2 = useRef(null);
  const scrollingContainerRef3 = useRef(null);

  useEffect(() => {
    // Shuffle the disciplines data before setting it to state
    const shuffledData = shuffleArray([...disciplinesData]);
    setGalleryItems(shuffledData);

    const initScrollTrigger = () => {
      gsap.fromTo(
        scrollingContainerRef.current,
        {
          xPercent: -100
        },
        {
          xPercent: 0,
          duration: 1,
          scrollTrigger: {
            trigger: scrollingContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      gsap.fromTo(
        scrollingContainerRef1.current,
        {
          xPercent: 0
        },
        {
          xPercent: -100,
          duration: 1,
          scrollTrigger: {
            trigger: scrollingContainerRef1.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      gsap.fromTo(
        scrollingContainerRef2.current,
        {
          xPercent: -90
        },
        {
          xPercent: 0,
          duration: 1,
          scrollTrigger: {
            trigger: scrollingContainerRef2.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      gsap.fromTo(
        scrollingContainerRef3.current,
        {
          xPercent: 0
        },
        {
          xPercent: -100,
          duration: 1,
          scrollTrigger: {
            trigger: scrollingContainerRef3.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    };

    setTimeout(() => {
      if (scrollingContainerRef.current) {
        initScrollTrigger();
        ScrollTrigger.refresh(); // Refresh ScrollTrigger instances
      }
    }, 0);
    // Set the shuffled data to state
    
  }, []);

 

  return (
    <HelmetProvider>
      <div class="container-fluid">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Blog </title>
        </Helmet>

        <section className="Scroll">
          <div className="disciplines">
            <div
              className="works-scrolling-container"
              ref={scrollingContainerRef}
              data-speed="8"
            >
              {galleryItems.map((discipline, index) => (
                <span
                  key={index}
                  className="h1 works-discipline-0 discipline-item"
                >
                  {discipline}
                </span>
              ))}
            </div>

            <div
              className="works-scrolling-container"
              ref={scrollingContainerRef1}
            >
              {galleryItems.map((discipline, index) => (
                <span
                  key={index}
                  className="h1 works-discipline-1 discipline-item"
                >
                  {discipline}
                </span>
              ))}
            </div>

            <div
              className="works-scrolling-container"
              ref={scrollingContainerRef2}
            >
              {galleryItems.map((discipline, index) => (
                <span
                  key={index}
                  className="h1 works-discipline-2 discipline-item"
                >
                  {discipline}
                </span>
              ))}
            </div>
            <div
              className="works-scrolling-container"
              ref={scrollingContainerRef3}
            >
              {galleryItems.map((discipline, index) => (
                <span
                  key={index}
                  className="h1 works-discipline-3 discipline-item"
                >
                  {discipline}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};
