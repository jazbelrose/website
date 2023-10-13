import React, { useEffect, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col } from "react-bootstrap";
import { dataabout, meta, skills, services } from "../../content_option";
import dataAbout from "./dataAbout.json";
import { ReactComponent as Sunburst } from "../../assets/svg/sunburst.svg";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./style.css";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const scrollingContainerRef0 = useRef(null);
  const scrollingContainerRef1 = useRef(null);
  const scrollingContainerRef2 = useRef(null);
  const scrollingContainerRef3 = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const svg = document.querySelector("#sunburst");
      if (svg) {
        clearInterval(interval);
        gsap.to(svg, {
          transformOrigin: "center center",
          rotation: 720, // Add rotation property
          scrollTrigger: {
            trigger: svg,
            start: "top bottom",

            scrub: true
          }
        });
      }
    }, 100); // Check every 100ms. Adjust as needed

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    gsap.to(".bar", 1.5, {
      delay: 0,
      height: 0,
      stagger: {
        amount: 0.5
      },
      ease: "power4.inOut"
    });
  }, []);
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title} | About </title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="container-fluid">
        <div class="overlay">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <div className="custom-row ">
          <div className="custom-column">
            <h1 id="random-quote" className="quote">
              {dataAbout.dataAbout &&
                dataAbout.dataAbout[
                  Math.floor(Math.random() * dataAbout.dataAbout.length)
                ]}
            </h1>
          </div>

          <div
            className="custom-column svg-container"
            ref={scrollingContainerRef1}
          >
            <Sunburst id="sunburst" alt="Sunburst" />
          </div>
        </div>

        <Row className="sec_sp">
          <hr style={{ width: "100%" }} className="t_border my-4" />
          <Col id="about-section" lg="5">
            <h3 className="titles about" ref={scrollingContainerRef3}>
              A bit about us...
            </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p className="data-class about-us">{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

        <hr style={{ width: "100%" }} className="t_border my-4" />

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="services-title">Services</h3>
          </Col>

          <Col lg="7">
            <div className="services data-class">
              <h5 className="service__title data-class">
                Tailored Pre-Production Immersive Experiences
              </h5>
              <p className="service_desc data-class">
                The Ultimate Project Joyride! Get up-close with your design
                before it’s even made! Our interactive 2D/3D prototypes are like
                stepping into your project. It’s your vision, your world - no
                surprises, just perfection.
              </p>
            </div>
          </Col>

          <Col lg="7">
            <div className="services data-class">
              <h5 className="service__title data-class">
                Experiential Design & Live Show Production
              </h5>
              <p className="service_desc data-class">
                Vision to Reality We're the architects of awe, taking your
                vision from ethereal concept to tangible wonder. Whether it’s an
                electrifying live show, an immersive space, or a captivating
                campaign, our art direction and production mastery breathe life
                into ideas. With savvy marketing and visionary design, your
                creation won’t just be seen, it’ll be felt. Witness the
                metamorphosis!
              </p>
            </div>
          </Col>

          <Col lg="5"></Col>
          <Col lg="5"></Col>

          <Col lg="7">
            <div className="services data-class">
              <h5 className="service__title data-class">
                Ultra-Realistic 3D Renderings
              </h5>
              <p className="service_desc data-class">
                Get Real... Like, REALLY Real! We dish out 3D renders so
                lifelike, you’ll want to touch ‘em. Peek into your project’s
                future; it’s looking pretty snazzy!
              </p>
            </div>
          </Col>

          <Col lg="7">
            <div className="services data-class">
              <h5 className="service__title data-class">Graphic Design</h5>
              <p className="service_desc data-class">
                Painting Dreams with Pixels Your story + our design chops =
                Mind-blowing graphics. Let’s make magic.
              </p>
            </div>
          </Col>

          <Col lg="5"></Col>
          <Col lg="5"></Col>

          <Col lg="7">
            <div className="services data-class">
              <h5 className="service__title data-class">Brand Strategy</h5>
              <p className="service_desc data-class">
                Unforgettable. That’s What You Are. We craft brand identities
                that stick like glue and sing like nightingales. Be iconic.
              </p>
            </div>
          </Col>

          <Col lg="7">
            <div className="services data-class">
              <h5 className="service__title data-class">
                Intuitive UI/UX Design
              </h5>
              <p className="service_desc data-class">
                Smooth Surfin’ on Digital Waves Your digital space, tailor-cut
                to perfection. Engaging, intuitive, and oh-so-slick.
              </p>
            </div>
          </Col>

          <Col lg="5"></Col>
          <Col lg="5"></Col>

          <Col lg="7">
            <div className="services data-class">
              <h5 className="service__title data-class">
                Picture-Perfect Photography
              </h5>
              <p className="service_desc data-class">
                Capture More Than a Moment Pictures that speak, laugh, and take
                your breath away. Freeze time - the awesome way.
              </p>
            </div>
          </Col>

          <Col lg="7">
            <div className="services data-class">
              <h5 className="service__title data-class">
                +The Creative Cosmos is the Limit!
              </h5>
              <p className="service_desc data-class">
                Plus, we've got everything from Sound design to NFT & Web3
                Services, Mobile App Development, and more! The creative cosmos
                is the limit!
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </HelmetProvider>
  );
};
