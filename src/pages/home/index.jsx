import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { meta } from "../../content_option";
import { gsap } from "gsap";
import { HeroSection } from "../../components/herosection";
import { InfoSection } from "../../components/infosection";
import { BlogEntry } from '../../components/blogentry';  

import PortfolioCard from "../../components/portfoliocard";

import Ticker from "../../components/ticker";
import SingleTicker from "../../components/singleticker";


import allBlogPosts from '../blog/blogposts/allBlogPosts.json';  




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


        <HeroSection />


        <div className="work-header">
        <h2>Work</h2>
        <span className="arrow-down">↓</span>
    </div>


    
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

      
      <div className="video-container">
      <video loop autoPlay muted playsInline>
        <source src="https://mylgcontent.s3.us-west-1.amazonaws.com/videos/liquid+bullet.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="portfolio-section">
        
        <div className="portfolio-row single-card-row">
          <PortfolioCard 
            className="single-card nocco"
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/Nocco+logo-01.png" 
            imageAlt="NOCCO" 
            title="NOCCO"
            subtitle="Influencers Venice Beach, CA" 
            description="3D Design, Immersive, Branding Design" 
          />
        </div>
        <div className="portfolio-row double-card-row">
          <PortfolioCard 
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/keys-soulcare.jpg" 
            imageAlt="Keys Soulcare" 
            title="Keys Soulcare" 
            subtitle="Haller 6 Mokibaby" 
            description="3D Design, Immersive, Digital" 
          />
          <PortfolioCard 
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/Logitech.jpg" 
            imageAlt="Logitech" 
            title="Logitech" 
            subtitle="Unleash your play" 
            description="3D Design, Graphic Design" 
          />
        </div>
        <div className="portfolio-row double-card-row">
          <PortfolioCard 
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/the-A.png" 
            imageAlt="Academy of Pop" 
            title="Academy of Pop" 
            subtitle="Branding Mokibaby" 
            description="3D Design, Immersive, Digital" 
          />
          <PortfolioCard 
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/barebells.jpg" 

            imageAlt="Barebells" 
            title="Barebells" 
            subtitle="Influencer Room" 
            
            description="3D Design, Graphic Design" 
          />
        </div>
     
     

        <div className="portfolio-row single-card-row">
          <PortfolioCard 
            className="single-card tcs"
            imageSrc="https://mylgcontent.s3.us-west-1.amazonaws.com/images/the-chainsmokers.jpg" 
            imageAlt="The Party Never Ends" 
            title="The Party Never Ends"
            subtitle="Chainsmokers ADPTV" 
            description="3D Design, Immersive, Event Design" 
          />
        </div>
     
     
      </div>

  <div className="blog-section">
      <div className="blog-header">
        <h2>Blog</h2>
        <span className="arrow-down">↓</span>
    </div>
    <div className="blog-grid">
        {allBlogPosts.slice(0, 5).map((post, index) => (
            <BlogEntry key={index} post={post} />
        ))}
    </div>
</div>

    
    <InfoSection />
    <hr style={{ opacity: "1", color: "fff", height: "2px", backgroundColor: "#fff" }} />

    <div className="single-ticker-section">

<SingleTicker />
</div>

  
  </HelmetProvider>
);
};
