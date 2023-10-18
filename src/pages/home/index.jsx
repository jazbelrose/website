import React, { useEffect, useState, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { meta } from "../../content_option";
import { gsap } from "gsap";

import { Herosection } from "../../components/herosection";
import PortfolioCard from "../../components/portfoliocard";
import Ticker from "../../components/ticker";






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
            className="single-card elf"
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/Elf.jpg" 
            imageAlt="e.l.f. Beauty Design" 
            title="e.l.f. Beauty"
            subtitle="Nylon House Mokibaby Art Basel" 
            description="3D Design, Immersive Digital" 
          />
        </div>
        
        
        <div className="portfolio-row double-card-row">
          <PortfolioCard 
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/The+Gold+Princess.jpg" 
            imageAlt="The Gold Princess" 
            title="The Gold Princess" 
            subtitle="Royal Allure Campaign" 
            description="Branding, Photography, Styling" 
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

      <div className="ticker-section">

      <Ticker />
</div>
 <div className="portfolio-section">
        
        <div className="portfolio-row single-card-row">
          <PortfolioCard 
            className="single-card"
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/Pipedream-Events.jpg" 
            imageAlt="PD Events" 
            title="PD Events"
            subtitle="Branding & Web Design" 
            description="3D Design, Animation, Web, Branding Design" 
          />
        </div>
        <div className="portfolio-row double-card-row">
          <PortfolioCard 
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/Chevron-strategy.jpg" 
            imageAlt="Chevron" 
            title="Chevron" 
            subtitle="Turn it up 2023" 
            description="3D Design, Immersive, Event Design" 
          />
          <PortfolioCard 
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/Jack-Masai.jpg" 
            imageAlt="Jack Masaï" 
            title="Jack Masaï" 
            subtitle="StrikeFit Paris, France" 
            description="Branding, Photography, Styling" 
          />
        </div>
        <div className="portfolio-row single-card-row">
          <PortfolioCard 
            className="single-card gca"
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/Ghost-Circus.jpg" 
            imageAlt="Ghost Circus Apparel" 
            title="Ghost Circus Apparel"
            subtitle="X by Eli James Collection" 
            description="Branding, Photography, Web Design" 
          />
        </div>
      </div>

  
  </HelmetProvider>
);
};
