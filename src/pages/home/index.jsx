import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./style.css";
import { meta } from "../../content_option";
import { gsap } from "gsap";
import { HeroSection } from "../../components/herosection";
import { InfoSection } from "../../components/infosection";
import { BlogEntry } from '../../components/blogentry';
import allBlogPosts from '../blog/allblogposts/allBlogPosts.json';

import PortfolioCard from "../../components/portfoliocard";

import Ticker from "../../components/ticker";
import SingleTicker from "../../components/singleticker";



export const Home = () => {

  const tickerLines = [
    "L.A. +22 ← Paris, France +1  ←   New York. ←  London.  ←  California ",
    "ADPTV.TROIA.NOCCO.PD. BAREBELLS.MISTIFI.ZAPPOS.THE GOLD PRINCESS.MOKIBABY",
    "34.0549° N, 118.2426° W 48.8566° N, 2.3522° E 40.7128° N, 74.0060° W 51.5072° N, 0.1276° W"
  ];

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
        <span className="arrow-down work-arrow">↓</span>
      </div>



      <div className="portfolio-section">



        <div className="portfolio-row single-card-row">
          <PortfolioCard
            className="single-card elf"
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/Elf.jpg"
            imageAlt="e.l.f. Beauty Design"
            title="e.l.f. Beauty"
            subtitle="Nylon House Mokibaby Art Basel"
            description="3D Design, Immersive Digital"
          />
        </div>


        <div className="portfolio-row double-card-row">
          <PortfolioCard
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/The+Gold+Princess.jpg"
            imageAlt="The Gold Princess"
            title="The Gold Princess"
            subtitle="Royal Allure Campaign"
            description="Branding, Photography, Styling"
          />
          <PortfolioCard
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/Bloom-And-Bliss.jpg"
            imageAlt="Bloom & Bliss Design"
            title="Bloom & Bliss"
            subtitle="Brand Identity"
            description="3D Animation, Branding Design"
          />
        </div>
      </div>

      <div className="ticker-section">

        <Ticker lines={tickerLines} />
      </div>
      <div className="portfolio-section">

        <div className="portfolio-row single-card-row">
          <PortfolioCard
            className="single-card"
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/Pipedream-Events.jpg"
            imageAlt="PD Events"
            title="PD Events"
            subtitle="Branding & Web Design"
            description="3D Design, Animation, Web, Branding Design"
          />
        </div>
        <div className="portfolio-row double-card-row">
          <PortfolioCard
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/Chevron-strategy.jpg"
            imageAlt="Chevron"
            title="Chevron"
            subtitle="Turn it up 2023"
            description="3D Design, Immersive, Event Design"
          />
          <PortfolioCard
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/Jack-Masai.jpg"
            imageAlt="Jack Masaï"
            title="Jack Masaï"
            subtitle="StrikeFit Paris, France"
            description="Branding, Photography, Styling"
          />
        </div>
        <div className="portfolio-row single-card-row">
          <PortfolioCard
            className="single-card gca"
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/Ghost-Circus.jpg"
            imageAlt="Ghost Circus Apparel"
            title="Ghost Circus Apparel"
            subtitle="X by Eli James Collection"
            description="Branding, Photography, Web Design"
          />
        </div>
      </div>


      <div className="video-container">
        <video loop autoPlay muted playsInline>
          <source src="https://d2qb21tb4meex0.cloudfront.net/videos/liquid+bullet.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="portfolio-section">

        <div className="portfolio-row single-card-row">
          <PortfolioCard
            className="single-card nocco"
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/Nocco+logo-01.png"
            imageAlt="NOCCO"
            title="NOCCO"
            subtitle="Influencers Venice Beach, CA"
            description="3D Design, Immersive, Branding Design"
          />
        </div>
        <div className="portfolio-row double-card-row">
          <PortfolioCard
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/keys-soulcare.jpg"
            imageAlt="Keys Soulcare"
            title="Keys Soulcare"
            subtitle="Haller 6 Mokibaby"
            description="3D Design, Immersive, Digital"
          />
          <PortfolioCard
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/Logitech.jpg"
            imageAlt="Logitech"
            title="Logitech"
            subtitle="Unleash your play"
            description="3D Design, Graphic Design"
          />
        </div>
        <div className="portfolio-row double-card-row">
          <PortfolioCard
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/the-A.png"
            imageAlt="Academy of Pop"
            title="Academy of Pop"
            subtitle="Branding Mokibaby"
            description="3D Design, Immersive, Digital"
          />
          <PortfolioCard
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/barebells.jpg"

            imageAlt="Barebells"
            title="Barebells"
            subtitle="Influencer Room"

            description="3D Design, Graphic Design"
          />
        </div>



        <div className="portfolio-row single-card-row">
          <PortfolioCard
            className="single-card tcs"
            imageSrc="https://d2qb21tb4meex0.cloudfront.net/images/the-chainsmokers.jpg"
            imageAlt="The Party Never Ends"
            title="The Party Never Ends"
            subtitle="Chainsmokers ADPTV"
            description="3D Design, Immersive, Event Design"
          />
        </div>


      </div>

      <div className="footer-blog-section">
        <div className="blog-header">
          <h2>Blog</h2>
          <span className="arrow-down blog-arrow">↓</span>
        </div>
        <div className="blog-grid">
          {allBlogPosts.slice(0, 5).map((post, index) => (
            <BlogEntry key={index} post={post} />
          ))}
        </div>
      </div>
      <hr style={{ opacity: "1", color: "fff", height: "2px", backgroundColor: "#fff" }} />

      <InfoSection />
      <hr style={{ opacity: "1", color: "fff", height: "2px", backgroundColor: "#fff", margin: "0.5rem", }} />

      <div className="single-ticker-section">

        <SingleTicker />
      </div>


    </HelmetProvider>
  );
};
