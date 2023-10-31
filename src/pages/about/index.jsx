import React, { useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataabout, meta, } from "../../content_option";
import dataAbout from "./dataAbout.json";
import serviceData from "./services.json";
import { ReactComponent as Sunburst } from "../../assets/svg/sunburst.svg";
import { ReactComponent as Mylg } from "../../assets/svg/mylg.svg";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./style.css";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useEffect(() => {
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

    gsap.to(".bar", 1.5, {
      delay: 0,
      height: 0,
      stagger: {
        amount: 0.5
      },
      ease: "power4.inOut"
    });

    gsap.from(".left-column .card", {
      opacity: 0,
      x: -100,                /* Offset of 100px in the X direction to the left */
      duration: 0.5,
      stagger: 0.2            /* 0.2 second delay between each card's animation */
    });

    // Animate cards from the right column
    gsap.from(".right-column .card", {
      opacity: 0,
      x: 100,                 /* Offset of 100px in the X direction to the right */
      duration: 0.5,
      stagger: 0.2            /* 0.2 second delay between each card's animation */
    });
    gsap.from("path.cls-15", {
      duration: 0.001,
      opacity: 0,
      y: -50,
      stagger: 0.1
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

      <div className="overlay">
        {Array(10)
          .fill(null)
          .map((_, idx) => (
            <div key={idx} className="bar"></div>
          ))}
      </div>

    <div className="mylg-container">

    <Mylg id="mylg-graphic" />



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