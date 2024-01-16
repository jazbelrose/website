import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom"; // Modified import
import { ReactComponent as Menuopened } from "../../assets/svg/menu-open.svg";
import { ReactComponent as Menuclosed } from "../../assets/svg/menu-closed.svg";
import { ReactComponent as User } from "../../assets/svg/user.svg";
import { useAuth } from "../../app/contexts/AuthContext";
import { signOut } from 'aws-amplify/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import useInactivityLogout from '../../app/contexts/useInactivityLogout';
import Cookies from 'js-cookie';


import gsap from "gsap";


const Headermain = () => {


  useInactivityLogout();

  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);
  const menuAnimation = useRef(null); // Ref to store the GSAP timeline
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);
  const { isAuthenticated, setIsAuthenticated, setUser, user } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef(null); // Ref for the user menu






  const handleSignOut = async () => {

    try {
      await signOut();
      setIsAuthenticated(false);
      setUser(null);
      navigate('/login'); // Redirect to login page
      Cookies.remove('myCookie');
    } catch (error) {
      console.error('Error during sign out:', error);
      // Optionally, handle the error (e.g., show an error message)
    }
  };




  const getLinkClass = (path) => {
    const currentPath = location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1) // Remove trailing slash
      : location.pathname;
    return currentPath.startsWith(path) ? "active-link" : "";
  };




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
    // Close the dropdown when the location changes
    setShowDropdown(false);
  }, [location]);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);


  const animateMenu = () => {
    if (showDropdown) {
      gsap.to(userMenuRef.current, {
        duration: 0.3,
        autoAlpha: 0, // Animates both the opacity and the visibility
        ease: 'power1.out',
        onComplete: () => setShowDropdown(false)
      });
    } else {
      setShowDropdown(true);
      gsap.from(userMenuRef.current, {
        duration: 0.3,
        autoAlpha: 0,
        ease: 'power1.in'
      });
    }
  };

  // Toggle dropdown and animate
  const toggleDropdown = () => {
    animateMenu();
  };


  useEffect(() => {
    // Set the initial state of the SVG path
    gsap.set(".span-open", {
      attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" }
    });


    // Define the animation timeline
    menuAnimation.current = gsap
      .timeline({ paused: true }) // Start in a paused state
      .to(".span-open", {
        duration: 0.75,
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
        duration: 1,
        attr: { d: "M0,1005S175,995,500,995s500,5,500,5V0H0Z" },
        ease: "Power2.easeOut"
      })

      .to(".menu .menu-item > a", {
        duration: .75,
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
    if (isActive) {
      document.body.classList.remove("ovhidden");
      if (menuAnimation.current) {
        menuAnimation.current.reverse();
        menuAnimation.current.eventCallback("onReverseComplete", () => setActive(false));
      } else {
        setActive(!isActive);
      }
    } else {
      document.body.classList.add("ovhidden");
      if (menuAnimation.current) {
        menuAnimation.current.play();
        menuAnimation.current.eventCallback("onComplete", () => setActive(true));
      } else {
        setActive(!isActive);
      }
    }
  };

  console.log(user); // Add this inside your component to log the user object
  useEffect(() => {
    console.log('User updated:', user);
  }, [user]);



  return (
    <>
      <header className={`fixed-top header ${isVisible ? "" : "hide"}`}>

        <div className="nav-bar">
          <Link to="/" className="site-logo">
            *MYLG!*
          </Link>
          <div className="nav-links">
            <Link to="/works" className={`nav-link ${getLinkClass("/works")}`}>
              SHOWCASE
            </Link>
            <Link to="/blog" className={`nav-link ${getLinkClass("/blog")}`}>
              VISIONS
            </Link>
            <Link to="/about" className={`nav-link ${getLinkClass("/about")}`}>
              ABOUT
            </Link>
            <Link to="/contact" className={`nav-link ${getLinkClass("/contact")}`}>
              CONTACT
            </Link>
          </div>
          <div className="right-bar">

            {isAuthenticated && user && (
              <div className="user-first-name">
                {user.firstName}
              </div>
            )}

            {isAuthenticated && user ? (
              <img
                src={user.thumbnail[0]} // Assuming the thumbnail is an array with one URL
                alt={`${user.firstName}'s Thumbnail`}
                className="user-thumbnail"
                style={{ maxWidth: '35px', maxHeight: '35px', width: 'auto', height: 'auto', cursor: 'pointer' }}
                onClick={toggleDropdown} // Attach toggleDropdown to the thumbnail's onClick event
              />
            ) : (
              <button className="toggle-button" onClick={toggleDropdown}>
                <User />
              </button>
            )}

            {showDropdown && (
              <div className="user-dropdown" ref={userMenuRef}>
                {isAuthenticated ? (
                  <>
                    <Link to="/dashboard" className={`user-menu-link ${getLinkClass("/dashboard")}`}>
                      Dashboard
                    </Link>
                    <Link to="/userprofile" className="user-menu-link">
                      Settings
                    </Link>
                    <button onClick={handleSignOut}>
                      <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </button>
                  </>
                ) : (
                  <Link to="/login" className={`user-menu-link ${getLinkClass("/dashboard")}`}>
                    Dashboard
                  </Link>
                )}
              </div>
            )}


            <button className="toggle-button" onClick={handleToggle}>
              {isActive ? <Menuopened /> : <Menuclosed />}
            </button>

          </div>
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
                    className={`my-3 sign-out-link ${getLinkClass("/works")}`}
                  >
                    SHOWCASE
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    onClick={handleToggle}
                    to="/blog" // Updated path
                    className={`my-3 sign-out-link ${getLinkClass("/blog")}`}
                  >
                    VISIONS
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    onClick={handleToggle}
                    to="/about"
                    className={`my-3 sign-out-link ${getLinkClass("/about")}`}
                  >
                    ABOUT
                  </Link>
                </li>

                <li className="menu-item">
                  {isAuthenticated ? (
                    <Link
                      onClick={handleToggle}
                      to="/dashboard" // Link to Dashboard when authenticated
                      className={`my-3 sign-out-link ${getLinkClass("/dashboard")}`}
    >
                      DASHBOARD
                    </Link>
                  ) : (
                    <Link
                      onClick={handleToggle}
                      to="/login" // Link to Login when not authenticated
                      className={`my-3 sign-out-link ${getLinkClass("/login")}`}
    >
                      LOGIN
                    </Link>
                  )}
                </li>

                <li className="menu-item">
                  {isAuthenticated ? (
                    <Link
                      onClick={handleSignOut}
                      to="/login" // Redirect to the login page when signing out
                      className="my-3 sign-out-link" // Add a custom class for styling
                    >
                      SIGN-OUT
                    </Link>
                  ) : (
                    <Link
                      onClick={handleToggle}
                      to="/register"
                      className="my-3"
                    >
                      SIGN UP
                    </Link>
                  )}
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
