

import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";


import Preloader from "../preloader";
import { Home } from "../pages/home";
import { Works } from "../pages/works";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Blog } from "../pages/blog";
import { Dashboard } from '../pages/dashboard';
import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';
import { EmailVerification } from '../pages/auth/Email-verification';
import { Forgotpassword } from '../pages/auth/Forgot-password';


import BlogPost from "../pages/blog/blogpost/BlogPost";
import WorkPost from "../pages/works/workpage/WorkPost";
import { AnimatePresence, motion } from "framer-motion";
import { NavigationDirectionContext, NavigationDirectionProvider } from "../components/NavigationDirectionProvider";


const pageVariants = {
  initial: { opacity: 0, y: "100vh" }, // changed from 100vw to 100vh
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: "100vh" } // changed from -100vw to -100vh
};


const blogPostVariants = {
  left: {
    initial: { opacity: 0, x: "100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "-100vw" }
  },
  right: {
    initial: { opacity: 0, x: "-100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vw" }
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1
};

function AppRoutes() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);


  if (isLoading) {
    return <Preloader setIsLoading={setIsLoading} />;
  }


  return (
    <NavigationDirectionProvider>
      <ActualRoutes location={location} />
    </NavigationDirectionProvider>
  );
}

const ActualRoutes = ({ location }) => {
  const { direction } = React.useContext(NavigationDirectionContext);
  const chosenDirection = direction === "left" ? "left" : "right";



  return (

    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />

        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />

        <Route
          path="/works"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Works />
            </motion.div>
          }
        />

        <Route
          path="/works/:workSlug"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <WorkPost />
            </motion.div>
          }
        />

        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ContactUs />
            </motion.div>
          }
        />
        <Route
          path="/blog"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Blog />
            </motion.div>
          }
        />
        <Route
          path="/blog/:postSlug"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={blogPostVariants[chosenDirection]}
              transition={pageTransition}
            >
              <BlogPost />
            </motion.div>
          }
        />

        <Route
          path="/dashboard"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Dashboard />
            </motion.div>
          }
        />

        {/* Add Login and Register Routes */}
        <Route
          path="/login"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Login />
            </motion.div>
          }
        />
        <Route
          path="/register"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Register />
            </motion.div>
          }
        />

        <Route
          path="/email-verification"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <EmailVerification />
            </motion.div>
          }
        />

        <Route
          path="/forgot-password"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Forgotpassword />
            </motion.div>
          }
        />




      </Routes>
    </AnimatePresence>

  );
};

export default AppRoutes;
