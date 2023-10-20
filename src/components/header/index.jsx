import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom"; // Modified import

import gsap from "gsap";

const SmallLinks = () => {

  return (
    <div className="header-wrapper">
      <Link to="/" className="site-logo">
        *MYLG!*
      </Link>
      <div className="nav-links">
        <Link to="/works" className={`nav-link ${getLinkClass("/works")}`}>
          WORKS
        </Link>
        <Link to="/blog" className={`nav-link ${getLinkClass("/blog")}`}>
          READS
        </Link>
        <Link to="/about" className={`nav-link ${getLinkClass("/about")}`}>
          ABOUT
        </Link>
        <Link to="/contact" className={`nav-link ${getLinkClass("/contact")}`}>
          CONTACT
        </Link>
      </div>
    </div>
  );
};

const Headermain = () => {


  const location = useLocation();

  const getLinkClass = (path) => {
    const currentPath = location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1) // Remove trailing slash
      : location.pathname;
    return currentPath.startsWith(path) ? "active-link" : "";
  };




  const [isActive, setActive] = useState(false);
  const menuAnimation = useRef(null); // Ref to store the GSAP timeline

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos <= 5) {
      setIsVisible(true);
    } else {
      const isVisible = prevScrollPos > currentScrollPos;
      setIsVisible(isVisible);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    // Set the initial state of the SVG path
    gsap.set(".span-open", {
      attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" }
    });

    // Define the animation timeline
    menuAnimation.current = gsap
      .timeline({ paused: true }) // Start in a paused state
      .to(".span-open", {
        duration: 0.5,
        attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
        ease: "Power2.easeIn",
        onStart: () => {
          document.querySelector(".nav-bar-menu").classList.add("opened");
          gsap.set(".nav-bar-menu", { visibility: "visible" });
        },
        onReverseComplete: () => {
          document
            .querySelector(".nav-bar-menu")
            .classList.remove("opened");
        }
      })

      .to(".span-open", {
        duration: 0.5,
        attr: { d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z" },
        ease: "Power2.easeOut"
      })

      .to(".menu .menu-item > a", {
        duration: 0.5,
        opacity: 1,
        transform: "translateY(0)",
        stagger: 0.1, // This will delay each link animation by 0.1s creating a cascading effect
        ease: "Power2.easeOut"
      })
      .eventCallback("onComplete", () => {
        setActive(true);
      });
  }, []);

  const handleToggle = () => {
    // Toggle the ovhidden class on the body element
    document.body.classList.toggle("ovhidden");

    if (menuAnimation.current) {
      if (isActive) {
        menuAnimation.current.reverse();
        menuAnimation.current.eventCallback("onReverseComplete", () =>
          setActive(false)
        );
      } else {
        menuAnimation.current.play();
        menuAnimation.current.eventCallback("onComplete", () =>
          setActive(true)
        );
      }
    } else {
      // If menuAnimation.current doesn't exist, simply toggle the isActive state
      setActive(!isActive);
    }
  };

  return (
    <>
      <header className={`fixed-top header ${isVisible ? "" : "hide"}`}>

        <div className="nav-bar">
          <Link to="/" className="site-logo">
            *MYLG!*
          </Link>
          <div className="nav-links">
            <Link to="/works" className={`nav-link ${getLinkClass("/works")}`}>
              WORKS
            </Link>
            <Link to="/blog" className={`nav-link ${getLinkClass("/blog")}`}>
              READS
            </Link>
            <Link to="/about" className={`nav-link ${getLinkClass("/about")}`}>
              ABOUT
            </Link>
            <Link to="/contact" className={`nav-link ${getLinkClass("/contact")}`}>
              CONTACT
            </Link>
          </div>
           <button className="toggle-button" onClick={handleToggle}>
            {isActive ? <VscClose /> : <VscGrabber />}
          </button>
        </div>


        <div className="nav-bar-menu">
          <div className="svg-wrapper">
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <path
                class="span-open"
                d="M0 2S175 1 500 1s500 1 500 1V0H0Z"
                fill="#0c0c0c"
              ></path>
            </svg>
          </div>

          <div className="menu-wrapper">
            <div className="menu-container">
              <ul className="menu">
                <li className="menu-item ">
                  <Link
                    onClick={handleToggle}
                    to="/" // Updated path
                    className="my-3"
                  >
                    HOME
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    onClick={handleToggle}
                    to="/works" // Updated path
                    className="my-3"
                  >
                    WORKS
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    onClick={handleToggle}
                    to="/blog" // Updated path
                    className="my-3"
                  >
                    READS
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    onClick={handleToggle}
                    to="/about" // Updated path
                    className="my-3"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    onClick={handleToggle}
                    to="/contact" // Updated path
                    className="my-3"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Headermain;
