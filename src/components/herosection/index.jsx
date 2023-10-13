import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ReactPlayer from "react-player";
import { Typewritercomponent } from "../typewriter";
import { ScrambleButton } from "../scramblebutton";

import { ReactComponent as Branding0 } from "../../assets/svg/Branding3.svg";
import backgroundVideo from '../../assets/videos/video.mp4';
import "./style.css";

export const Herosection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(".heading", {
      delay: 1.2, 
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out"
    });

    gsap.from(".sub-heading", {
      delay: 1.4, 
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out"
    });

    gsap.from(".button-container", {
      delay: 1.6, 
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out"
    });

    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5
      },
      ease: "power4.inOut"
    });
  }, []);

  return (
    
   
<>
<div className="herosection-container">
<ReactPlayer
          className="background-video"
          url={backgroundVideo}
          width="100%"
          height="100%"
          playing
          muted
          loop
          controls={false}
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                controls: 0,
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                disablekb: 1
              }
            }
          }}
        />
        <div className="content-overlay">
    
        <div className="custom-column"></div>
        <div className="typewriter-container">
    <Typewritercomponent className="typewriter" />
</div>
        <div className="custom-row ">
        
          <div className="custom-column ">
            <div className="text-wrapper">
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
          <div className="custom-column">
            
          </div>
          <div className="custom-column branding-0 ">
            <Branding0 className="branding-0-svg" />
          </div>
        </div>
      </div>
      </div>
      </>
    );
    
};
