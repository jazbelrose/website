import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ReactPlayer from "react-player";
import { Typewritercomponent } from "../typewriter";
import { ScrambleButton } from "../scramblebutton";

import { ReactComponent as Branding0 } from "../../assets/svg/Branding3.svg";

import "./style.css";

export const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Define a common animation function for reusability
    const animateFromTo = (element, { fromProps, toProps }) => {
      gsap.fromTo(element, fromProps, toProps);
    };

    
    
    const animationProperties = [
      {
        selector: ".heading",
        fromProps: { opacity: 0, y: 50 },
        toProps: { opacity: 1, y: 0, delay: 1.6, duration: 1, ease: "power3.out" }
      },
      {
        selector: ".sub-heading",
        fromProps: { opacity: 0, y: 50 },
        toProps: { opacity: 1, y: 0, delay: 1.8, duration: 1, ease: "power3.out" }
      },
      {
        selector: ".button-container",
        fromProps: { opacity: 0, y: 50 },
        toProps: { opacity: 1, y: 0, delay: 2, duration: 1, ease: "power3.out" }
      }
      // Add more animations here if needed
    ];

    // Run animations
    animationProperties.forEach((anim) => {
      animateFromTo(anim.selector, {
        fromProps: anim.fromProps,
        toProps: anim.toProps
      });
    });

    // Separate animation for bar
    gsap.to(".bar", {
      height: 0,
      delay: 3.5,
      duration: 1.5,
      stagger: { amount: 0.5 },
      ease: "power4.inOut"
    });

  }, []);

  const backgroundVideoUrl = 'https://d2qb21tb4meex0.cloudfront.net/videos/video.mp4';

  return (
    
   
<>


<div className="herosection-container">

<div className="video-wrapper">

<div className="background-video-wrapper">
<ReactPlayer
          url={backgroundVideoUrl}
    playing
    muted
    loop
    playsInline
    width="100%"
    height="100%"
      />

        </div>

        </div>


        <div className="text-overlay">
             <h2 className="heading" ref={textRef}>
              Design <br />
              That elevates <br />
              Your brand
            </h2>
            <h4 className="sub-heading">
              From the vibrant streets of Los Angeles, our design agency brings to life stunning experiential designs. We offer a platform for designers, clients, and brands to shine and elevate!
            </h4>
            <div className="button-container">
              <ScrambleButton text="Get in touch → " to="/contact" />
            </div>
          
          </div>
  </div>
     
      </>
    );
    
};
