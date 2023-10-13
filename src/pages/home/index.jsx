import React, { useEffect, useState, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { Herosection } from "../../components/herosection";

import { ContactUs } from "../contact";
import { About } from "../about";
import { Blog } from "../blog";
import { Scroll } from "../scroll";


import { meta } from "../../content_option";
import { gsap } from "gsap";


import { Typewritercomponent } from "../../components/typewriter";

export const Home = () => {

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
        <title>{meta.title} | Home </title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="home-main-container ">

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
        <Herosection />
        <About />
        <Blog maxPosts={5} />
        <Scroll />
        <ContactUs />
      </div>
    </HelmetProvider>
  );
};
