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





    gsap.set(".uuid-66427b3d-aabb-420f-a8e7-bf006193f4f4", { opacity: 0 });

// Animation: stagger the appearance of each path
gsap.to(".uuid-66427b3d-aabb-420f-a8e7-bf006193f4f4", {
    opacity: 1,
    duration: 0.1,
    stagger: 0.1,
    delay: 0.75,
    ease: "power2.out"
});

    // Initial state: set the opacity of .cls-13 elements to 0
    gsap.set(".cls-13", { opacity: 0 });

    // Animation: Staggered fade-in of .cls-13 elements
    gsap.to(".cls-13", {
      opacity: 1,
      duration: 0.5,   // Very fast fade-in
      stagger: 0.002,    // 0.025 seconds delay between each element's animation start
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



      <div className="flex-row">
        <div className="flex-col">
          <h1 id="random-quote" className="quote">
            {randomQuote}
          </h1>
        </div>
        <div className="flex-col svg-container">
          <Sunburst id="sunburst" alt="Sunburst" />
        </div>
      </div>

      <div className="card-container flex-row">
        <div className="flex-col left-column">  {/* Left Column */}
          <div className="card">
            <div className="card-content">
              <div className="card-row">
                <div className="circle">01</div>
                <h2 className="card-title">Tailored Pre-Production Immersive Experiences</h2>
              </div>
              <hr className="dotted-hr" />
              <p className="card-description">The Ultimate Project Joyride! Get up-close with your design
                before it’s even made! Our interactive 2D/3D prototypes are like
                stepping into your project. It’s your vision, your world - no
                surprises, just perfection.</p>
            </div>
          </div>

          {/* Entry 03 */}
          <div className="card">
            <div className="card-content">
              <div className="card-row">
                <div className="circle">03</div>
                <h2 className="card-title">Ultra-Realistic 3D Renderings</h2>
              </div>
              <hr className="dotted-hr" />
              <p className="card-description">Get Real... Like, REALLY Real! We dish out 3D renders so lifelike, you’ll want to touch ‘em. Peek into your project’s future; it’s looking pretty snazzy!</p>
            </div>
          </div>

          {/* Entry 05 */}
          <div className="card">
            <div className="card-content">
              <div className="card-row">
                <div className="circle">05</div>
                <h2 className="card-title">Brand Strategy</h2>
              </div>
              <hr className="dotted-hr" />
              <p className="card-description">Unforgettable. That’s What You Are. We craft brand identities that stick like glue and sing like nightingales. Be iconic.</p>
            </div>
          </div>

          {/* Entry 07 */}
          <div className="card">
            <div className="card-content">
              <div className="card-row">
                <div className="circle">07</div>
                <h2 className="card-title">Picture-Perfect Photography</h2>
              </div>
              <hr className="dotted-hr" />
              <p className="card-description">Capture More Than a Moment Pictures that speak, laugh, and take your breath away. Freeze time - the awesome way.</p>
            </div>
          </div>
        </div>


        {/* Right Column */}
        <div className="flex-col right-column">
          <div className="card">
            <div className="card-content">
              <div className="card-row">
                <div className="circle">02</div>
                <h2 className="card-title">Experiential Design & Live Show Production</h2>
              </div>
              <hr className="dotted-hr" />
              <p className="card-description">Vision to Reality We're the architects of awe, taking your vision from ethereal concept to tangible wonder. Our art direction and production mastery breathe life into ideas.</p>
            </div>
          </div>

          {/* Entry 04 */}
          <div className="card">
            <div className="card-content">
              <div className="card-row">
                <div className="circle">04</div>
                <h2 className="card-title">Graphic Design</h2>
              </div>
              <hr className="dotted-hr" />
              <p className="card-description">Painting Dreams with Pixels Your story + our design chops = Mind-blowing graphics. Let’s make magic.</p>
            </div>
          </div>

          {/* Entry 06 */}
          <div className="card">
            <div className="card-content">
              <div className="card-row">
                <div className="circle">06</div>
                <h2 className="card-title">Intuitive UI/UX Design</h2>
              </div>
              <hr className="dotted-hr" />
              <p className="card-description">Smooth Surfin’ on Digital Waves Your digital space, tailor-cut to perfection. Engaging, intuitive, and oh-so-slick.</p>
            </div>
          </div>

          {/* Entry 08 */}
          <div className="card">
            <div className="card-content">
              <div className="card-row">
                <div className="circle">08</div>
                <h2 className="card-title">+The Creative Cosmos is the Limit!</h2>
              </div>
              <hr className="dotted-hr" />
              <p className="card-description">Plus, we've got everything from Sound design to NFT & Web3 Services, Mobile App Development, and more! The creative cosmos is the limit!</p>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );

};