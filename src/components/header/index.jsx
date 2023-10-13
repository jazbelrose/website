import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom"; // Modified import
import { logotext, socialprofils } from "../../content_option";
import Themetoggle from "../themetoggle";
import gsap from "gsap";

const SmallLinks = () => {
  const location = useLocation(); // Use the useLocation hook inside SmallLinks

  const getLinkClass = (path) => {
    const currentPath = location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1) // Remove trailing slash
      : location.pathname;
    return currentPath.startsWith(path) ? "active-link" : "";
  };
  return (
    <div className="small-links">
      <Link to="/" className="logo">
        *MYLG!*
      </Link>
      <br />

      <Link to="/works" className={`small-link ${getLinkClass("/works")}`}>
        WORKS
      </Link>
      <Link to="/blog" className={`small-link ${getLinkClass("/blog")}`}>
        READS
      </Link>
      <Link to="/about" className={`small-link ${getLinkClass("/about")}`}>
        ABOUT
      </Link>
      <Link to="/contact" className={`small-link ${getLinkClass("/contact")}`}>
        CONTACT
      </Link>
    </div>
  );
};

const Headermain = () => {
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
          document.querySelector(".site__navigation").classList.add("opened");
          gsap.set(".site__navigation", { visibility: "visible" });
        },
        onReverseComplete: () => {
          document
            .querySelector(".site__navigation")
            .classList.remove("opened");
        }
      })

      .to(".span-open", {
        duration: 0.5,
        attr: { d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z" },
        ease: "Power2.easeOut"
      })

      .to(".the_menu .menu_item > a", {
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
      <header className={`fixed-top site__header ${isVisible ? "" : "hide"}`}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="nav_ac">
            <SmallLinks />
          </div>

          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className="site__navigation">
          <div className="svg__wrapper">
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <path
                class="span-open"
                d="M0 2S175 1 500 1s500 1 500 1V0H0Z"
                fill="#0c0c0c"
              ></path>
            </svg>
          </div>

          <div className="menu__wrapper">
            <div className="menu__container p-3">
              <ul className="the_menu">
                <li className="menu_item ">
                  <Link
                    onClick={handleToggle}
                    to="/" // Updated path
                    className="my-3"
                  >
                    HOME
                  </Link>
                </li>
                <li className="menu_item">
                  <Link
                    onClick={handleToggle}
                    to="/works" // Updated path
                    className="my-3"
                  >
                    WORKS
                  </Link>
                </li>
                <li className="menu_item">
                  <Link
                    onClick={handleToggle}
                    to="/blog" // Updated path
                    className="my-3"
                  >
                    READS
                  </Link>
                </li>
                <li className="menu_item">
                  <Link
                    onClick={handleToggle}
                    to="/about" // Updated path
                    className="my-3"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="menu_item">
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
        <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
          <p className="copyright m-0">{logotext}</p>
        </div>
      </header>
    </>
  );
};

export default Headermain;
