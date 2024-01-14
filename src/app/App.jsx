import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavigationDirectionProvider } from "./contexts/NavigationDIrectionProvider";
import { Hub } from 'aws-amplify';
import  AuthEventHandler  from "./contexts/AuthEventHandler"; 
import { AuthProvider } from "./contexts/AuthContext"; 
import { useAuth } from './contexts/AuthContext';




import { ScrollTrigger } from "gsap/ScrollTrigger";


import AppRoutes from "./routes";
import Headermain from "../components/header/";




function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null; // or return children if needed
}


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
  useEffect(() => {
    const setFavicon = (darkMode) => {
      const link = document.querySelector("link[rel~='icon']");
      if (!link) return;

      link.href = darkMode ? '/favicon-light.png' : '/favicon-light.png';
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setFavicon(mediaQuery.matches);

    const handleChange = (e) => {
      setFavicon(e.matches);
    };

    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);



  return (
    <AuthProvider>

    <NavigationDirectionProvider>
    
        <Router basename={process.env.PUBLIC_URL}>

        <AuthEventHandler />
        
          {!isLoading && <Headermain />}

              <ScrollToTop />

              <AppRoutes />
           
        </Router>
    
    </NavigationDirectionProvider>
    
    </AuthProvider>


  );
}
