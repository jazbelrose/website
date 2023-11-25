import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import "./style.css";
import worksData from '../works.json';
import aFLowerBathData from './A-Flower-Bath.json';
import { ReactComponent as AopHeader } from "../../../assets/svg/Academy-of-Pop/aopheader.svg";
import { ReactComponent as AopTitle } from "../../../assets/svg/Academy-of-Pop/aoptitle.svg";
import { ReactComponent as Row1 } from "../../../assets/svg/Academy-of-Pop/row1.svg";
import { ReactComponent as Row2 } from "../../../assets/svg/Academy-of-Pop/row2.svg";
import { ReactComponent as Row3 } from "../../../assets/svg/Academy-of-Pop/row3.svg";
import { ReactComponent as Row5 } from "../../../assets/svg/Academy-of-Pop/row5.svg";
import { ReactComponent as Row6 } from "../../../assets/svg/Academy-of-Pop/row6.svg";
import { ReactComponent as Row7 } from "../../../assets/svg/Academy-of-Pop/row7.svg";
import { ReactComponent as Row8 } from "../../../assets/svg/Academy-of-Pop/row8.svg";

import { ReactComponent as Asvg } from "../../../assets/svg/Academy-of-Pop/asvg.svg";
import Ticker from "../../../components/ticker";
import { InfoSection } from "../../../components/infosection";
import SingleTicker from "../../../components/singleticker";

import Counter from "../../../counter.jsx";

const AcademyOfPop = () => {


    let galleryRefs = useRef([]);
   
    
    const tickerLines = [
        "PROJECT DESIGNED BY MOKIBABY ",
        "ACADEMY OF POP ",
        "DIGITAL ART BY *MYLG!*"
    ];

    // GSAP animation after images have loaded

    useEffect(() => {
       
            const masterTimeline = gsap.timeline();

            // SVG Path Animation
            masterTimeline
                .to("#revealPath", {
                    attr: { d: "M0,502S175,272,500,272s500,230,500,230V0H0Z" }, // Intermediate state
                    duration: 0.75,
                    ease: "Power1.easeIn"
                })
                .to("#revealPath", {
                    attr: { d: "M0,2S175,1,500,1s500,1,500,1V0H0Z" }, // Final state
                    duration: 0.5,
                    ease: "power1.easeOut"
                });

            // Staggered Animations for SVG Elements
            masterTimeline.fromTo('.st1', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.1, stagger: 0.1 }, "-=0.25");
            masterTimeline.fromTo('.st2', { scale: 0 }, { scale: 1, duration: 1, stagger: 0.1, ease: 'elastic.out(1, 0.3)' }, "-=0.5");

          
  
       
    }, []); // Dependency on isLoading

  

    return (

        <>
            <div className="svg-overlay">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path id="revealPath" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                </svg>
            </div>

            <div className="works">
                <div className="workpage-heading">
                    <AopHeader />
                </div>
                <div className="rendering-layout">
                    <AopTitle />



                    <div className="rendering-heading">
                        <div className="rendering-top-row">
                            <div className="rendering-header">
                                <h2>Branding</h2>
                            </div>
                            {/* <span className="arrow-down works-arrow">↓</span> */}
                        </div>
                        <div className="rendering-subheader">
                            <h3><br />
                            </h3>
                        </div>
                    </div>
                    <Row1 className="rendering-row" />
                    <Row2 className="rendering-row" />
                    <Row3 className="rendering-row" />

                    <div className="rendering-row-video">
                        {/* Left Element: Video */}
                        <div className="animation-container asvg-container">

                            <video width="100%" height="100%" loop autoPlay muted playsInline>
                                <source src="https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/00.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>


                        <div className="right-content">
                            <Asvg className="asvg" />
                        </div>
                    </div>






                </div>
                <div className="rendering-ticker-section">

                    <Ticker lines={tickerLines} />
                </div>

                <div className="rendering-layout">
                    <div className="rendering-top-row">
                        <div className="rendering-header">
                            <h2>Interior  <br />
                                Design</h2>
                        </div>
                        {/* <span className="arrow-down works-arrow">↓</span> */}
                    </div>
                    <div className="rendering-subheader">
                        <h3>Ph Level<br />
                        </h3>
                    </div>
                    <Row5 className="rendering-row" />

                    <div className="rendering-row-video">

                        <div className="aop-video-container">
                            <video width="100%" height="100%" loop autoPlay muted playsInline>
                                <source src="https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/01.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>


                        <div className="aop-video-container">
                            <video width="100%" height="100%" loop autoPlay muted playsInline>
                                <source src="https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/02.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </div>

                    <div className="rendering-row-video">

                        <div className="aop-video-container 169">
                            <video width="100%" height="100%" loop autoPlay muted playsInline>
                                <source src="https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/03.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>
                    </div>

                    <Row6 className="rendering-row" />
                    <div className="rendering-top-row">
                        <div className="rendering-header ll-studios">
                            <h2>Interior  <br />
                                Design</h2>
                        </div>
                        {/* <span className="arrow-down works-arrow">↓</span> */}
                    </div>
                    <div className="rendering-subheader ">
                        <h3>LL Studios<br />
                        </h3>
                    </div>
                    <Row7 className="rendering-row" />

                    <div className="rendering-row-video">

                        <div className="aop-video-container">
                            <video width="100%" height="100%" loop autoPlay muted playsInline>
                                <source src="https://mylgcontent.s3.us-west-1.amazonaws.com/02-Academy+of+Pop/04.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>


                        <div className="aop-video-container">
                            <img src="https://d2qb21tb4meex0.cloudfront.net/02-Academy+of+Pop/20.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>


                    </div>

                    <div className="rendering-layout">

                        <Row8 className="rendering-row" />
                    </div>


                    <div className="aop-youtube-container">
                        <iframe
                            src="https://www.youtube.com/embed/qC-z4xPSOIA?modestbranding=1"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>




                </div>

                <div className="rendering-infosection">

                   

                    <InfoSection />
                    <hr style={{ opacity: "1", color: "fff", height: "2px", backgroundColor: "#fff", margin: "0.5rem", }} />

                    <div className="single-ticker-section">

                        <SingleTicker />
                    </div>
                </div>

            </div>
        </>
    );
};

export default AcademyOfPop;
