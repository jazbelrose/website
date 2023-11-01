import React, { useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataabout, meta, } from "../../content_option";
import dataAbout from "./dataAbout.json";
import serviceData from "./services.json";
import { ReactComponent as Sunburst } from "../../assets/svg/sunburst.svg";
import { ReactComponent as Mylgstaggered } from "../../assets/svg/mylgstagger.svg";
import { ReactComponent as Mylgsolo } from "../../assets/svg/mylgsolo.svg";
import { ReactComponent as Studiotitle } from "../../assets/svg/studiotitle.svg";
import { ReactComponent as Studiosubtitle } from "../../assets/svg/subtitles.svg";
import { ReactComponent as Tagline } from "../../assets/svg/notjust.svg";
import { ReactComponent as Brandingcard } from "../../assets/svg/brandingcard.svg";
import { ReactComponent as Designcard } from "../../assets/svg/designcard.svg";
import { ReactComponent as Experientialcard } from "../../assets/svg/experientialcard.svg";
import { ReactComponent as Techcard } from "../../assets/svg/techcard.svg";


import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./style.css";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useEffect(() => {

    const timeline = gsap.timeline();
    const interval = setInterval(() => {
      const svg = document.querySelector("#sunburst");
      if (svg) {
        clearInterval(interval);
        gsap.to(svg, {
          transformOrigin: "center center",
          rotation: 720,
          scrollTrigger: {
            trigger: svg,
            start: "top bottom",
            scrub: true
          }
        });
      }
    }, 100);

    timeline.to("#revealPath", {
      attr: {
        d: "M0,502S175,272,500,272s500,230,500,230V0H0Z" // Intermediate state
      },
      duration: .75,
      ease: "Power1.easeIn",
    })
      .to("#revealPath", {
        attr: {
          d: "M0,2S175,1,500,1s500,1,500,1V0H0Z" // Final state
        },
        duration: 0.5,
        ease: "power1.easeOut"

      });





    gsap.set(".uuid-01f5aca7-0df2-4d97-885c-bee4c47a7981", { opacity: 0 });

    // Animation: stagger the appearance of each path
    gsap.to(".uuid-01f5aca7-0df2-4d97-885c-bee4c47a7981", {
      opacity: 1,
      duration: 0.1,
      stagger: 0.1,
      delay: 0.75,
      ease: "power2.out"
    });


    gsap.set(".cls-all", { opacity: 0 });


    gsap.to(".cls-all", {
      opacity: 1,
      duration: 0.5,
      stagger: 0.002,
      delay: 1.5,
      ease: "power4.inOut"

    });

    gsap.set(".uuid-15b93112-0a1e-483d-913e-d7227f930ae5", { opacity: 0 });


    gsap.to(".uuid-15b93112-0a1e-483d-913e-d7227f930ae5", {
      opacity: 1,
      duration: 0.05,
      stagger: 0.05,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".tagline", // Assuming #tagline is the ID of the SVG container
        start: "top bottom",

      }
    });





    return () => clearInterval(interval);
  }, []);

  const randomQuote =
    dataAbout.dataAbout &&
    dataAbout.dataAbout[
    Math.floor(Math.random() * dataAbout.dataAbout.length)
    ];

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title} | About </title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <div className="svg-overlay">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="revealPath" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
      </div>



      <div className="studio-title">
        <div className="content-limit">
          <Studiotitle id="studio-title" />

        </div>
      </div>

      <div className="studio-subtitle">
        <div className="content-limit">
          <Studiosubtitle id="studio-subtitle" />
        </div>
      </div>

      <div className="mylg-container">
        <div className="content-limit">
          <Mylgsolo id="mylg-solo" />
          <Mylgstaggered id="mylg-staggered" />
        </div>
      </div>

      <div className="tagline">
        <div className="content-limit">
          <Tagline id="tagline" />
        </div>
        <p className="services-description">MYLG is here to make you look good in any digital landscape.
          As a premier design agency, we focus on delivering tailored
          digital solutions that elevate your brand’s presence. From 3D
          environment design, 3D modeling and comprehensive web
          design to advanced back-end and front-end development,
          we are dedicated to setting industry standards. Our work
          doesn’t just aim for aesthetics; we ensure it communicates
          the essence of your brand. If you’re seeking immersive
          digital campaigns, strategic brand narratives, or
          high-end commercial content, MYLG is
          equipped to drive your vision into the
          future of digital innovation.</p>
      </div>
      
      <div className="cards-container">
        <div className="card-item">
          <Designcard />

        </div>
        <div className="card-item">
          <Experientialcard />
        </div>
        <div className="card-item">
          <Techcard />
        </div>
        <div className="card-item">
          
          <Brandingcard />
        </div>
      </div>




    </HelmetProvider>
  );

};