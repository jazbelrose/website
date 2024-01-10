import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ReactPlayer from "react-player";
import { Typewritercomponent } from "../typewriter";
import { ScrambleButton } from "../scramblebutton";

import { ReactComponent as Branding0 } from "../../assets/svg/Branding3.svg";
import backgroundVideo from '../../assets/videos/video.mp4';
import "./style.css";

export const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Define a common animation function for reusability
    const animateFromTo = (element, { fromProps, toProps }) => {
      gsap.fromTo(element, fromProps, toProps);
    };

    // Define properties for each animated element
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

  return (
    
   
<>


<div className="herosection-container">

<div className="video-wrapper">
<video 
    className="background-video" 
    width="100%" 
    height="100%" 
    autoPlay 
    muted 
    loop 
    playsInline
>
    <source src={backgroundVideo} type="video/mp4" />
    Your browser does not support the video tag.
</video>

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
