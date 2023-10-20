import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContext from "../components/themetoggle/ThemeContext";

import { ScrollTrigger } from "gsap/ScrollTrigger";


import AppRoutes from "./routes";
import Headermain from "../components/header/";


import {
 
  NavigationDirectionProvider
} from "../components/NavigationDirectionProvider";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "dark";
  });



  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (isLoading) {
    setTimeout(() => {
      setIsLoading(false);
      ScrollTrigger.refresh();
    }, 2500);
  }



  return (
    <NavigationDirectionProvider>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            color="255, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
          />
        </div>
        <Router basename={process.env.PUBLIC_URL}>
          {!isLoading && <Headermain />}

          
              <ScrollToTop />

              <AppRoutes />
           
        </Router>
      </ThemeContext.Provider>
    </NavigationDirectionProvider>
  );
}
