import React, { useEffect, useState, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { Herosection } from "../../components/herosection";
import PortfolioCard from "../../components/portfoliocard";




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



      <div className="portfolio-section">
        
        <div className="portfolio-row single-card-row">
          <PortfolioCard 
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/Elf.jpg" 
            imageAlt="e.l.f. Beauty Design" 
            title="e.l.f. Beauty"
            subtitle="Nylon House Art Basel" 
            description="3D Design, Immersive Digital" 
          />
        </div>
        
        
        <div className="portfolio-row double-card-row">
          <PortfolioCard 
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/Now-United.jpg" 
            imageAlt="Now United Design" 
            title="Now United" 
            subtitle="Logo Design" 
            description="3D Design, Immersive Digital" 
          />
          <PortfolioCard 
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/Bloom-And-Bliss.jpg" 
            imageAlt="Bloom & Bliss Design" 
            title="Bloom & Bliss" 
            subtitle="Brand Identity" 
            description="3D Animation, Branding Design" 
          />
        </div>
      </div>


  
  </HelmetProvider>
);
};
