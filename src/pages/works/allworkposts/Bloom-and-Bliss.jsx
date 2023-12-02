import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import "./style.css";
import worksData from '../works.json';
import aFLowerBathData from './A-Flower-Bath.json';
import { ReactComponent as BloomAndBlissHeader } from "../../../assets/svg/bloomandbliss/bloomandblissheader.svg";

import { ReactComponent as Row1 } from "../../../assets/svg/bloomandbliss/row1.svg";
import { ReactComponent as Row2 } from "../../../assets/svg/bloomandbliss/row2.svg";
import { ReactComponent as Row3 } from "../../../assets/svg/bloomandbliss/row3.svg";
import { ReactComponent as Row4 } from "../../../assets/svg/bloomandbliss/row4.svg";
import { ReactComponent as Row5 } from "../../../assets/svg/bloomandbliss/row5.svg";
import { ReactComponent as Row6 } from "../../../assets/svg/bloomandbliss/row6.svg";
import { ReactComponent as Row7 } from "../../../assets/svg/bloomandbliss/row7.svg";


import Ticker from "../../../components/ticker/index.jsx";
import { InfoSection } from "../../../components/infosection/index.js";
import SingleTicker from "../../../components/singleticker/index.jsx";

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
                    <BloomAndBlissHeader />
                </div>
                <div className="rendering-layout">





                    <Row1 className="rendering-row" />


                    <div className="rendering-row-video">

                        <div className="bb-video-container">
                            <video
                                style={{ borderRadius: '40px', overflow: 'hidden' }}
                                width="100%"
                                height="100%"
                                loop
                                autoPlay
                                muted
                                playsInline
                            >
                                <source src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/bbvideo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>

                    </div>

                    <Row2 className="rendering-row" />



                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/01.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/02.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/03.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>


                    </div>



                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/row31.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/row32.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>



                    </div>




                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/08.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/09.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>



                    </div>





                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/10.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/11.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/12.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>




                    </div>



                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/13.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>



                    </div>


                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/14.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/15.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>



                    </div>
                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/16.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/17.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>



                    </div>




                    <Row4 className="rendering-row-svg" />





                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/04-Bloom+%26+Bliss/27.png" alt="Bloom & Bliss Image" width="100%" height="100%" />
                        </div>

                    </div>



                    <Row5 className="rendering-row-svg" />
                    <Row6 className="rendering-row" />
                    <Row7 className="rendering-row" />











                </div>

                <div className="rendering-infosection">



                    <InfoSection />
                    <hr style={{ opacity: "1", color: "fff", height: "2px", backgroundColor: "#fff", margin: "0.5rem", }} />

                    <div className="single-ticker-section">

                        <SingleTicker />
                    </div>
                </div>

            </div >
        </>
    );
};

export default AcademyOfPop;
