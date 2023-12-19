import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import "./style.css";
import worksData from '../works.json';
import aFLowerBathData from './A-Flower-Bath.json';
import { ReactComponent as PipeDreamEventsHeader } from "../../../assets/svg/pipedreamevents/pipedreameventsheader.svg";

import { ReactComponent as Row1 } from "../../../assets/svg/pipedreamevents/row1.svg";
import { ReactComponent as Row2 } from "../../../assets/svg/pipedreamevents/row2.svg";
import { ReactComponent as Row3 } from "../../../assets/svg/pipedreamevents/row3.svg";
import { ReactComponent as Row4 } from "../../../assets/svg/pipedreamevents/row4.svg";
import { ReactComponent as Row5 } from "../../../assets/svg/pipedreamevents/row5.svg";
import { ReactComponent as Row6 } from "../../../assets/svg/pipedreamevents/row6.svg";



import Ticker from "../../../components/ticker/index.jsx";
import { InfoSection } from "../../../components/infosection/index.js";
import SingleTicker from "../../../components/singleticker/index.jsx";

import Counter from "../../../counter.jsx";

const pipedreamevents = () => {


    let galleryRefs = useRef([]);


    const tickerLines = [
        "PIPES & DRAPES ",
      
    ];

    // GSAP animation after images have loaded

    useEffect(() => {
        const masterTimeline = gsap.timeline();

        // SVG Path Animation
        masterTimeline
            .to("#revealPath", {
                attr: { d: "M0,502S175,272,500,272s500,230,500,230V0H0Z" },
                duration: 0.75,
                ease: "Power1.easeIn"
            })
            .to("#revealPath", {
                attr: { d: "M0,2S175,1,500,1s500,1,500,1V0H0Z" },
                duration: 0.5,
                ease: "power1.easeOut"
            });

        // ScrollTrigger animations
        ['.st1', '.st2'].forEach(selector => {
            gsap.fromTo(selector,
                { scale: 0 },
                {
                    scale: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: 'elastic.out(1, 0.3)',
                    scrollTrigger: {
                        trigger: selector,
                        start: "top bottom", // start the animation when "top" of the element hits "bottom" of the viewport
                        end: "bottom top",
                        toggleActions: "restart none none none"
                    }
                }
            );
        });

        // Regular GSAP Animations for .st3 and .st4
        masterTimeline.fromTo('.st3',
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 0.1, stagger: 0.1 },
            "-=0.25"
        );
        masterTimeline.fromTo('.st4',
            { scale: 0 },
            { scale: 1, duration: 1, stagger: 0.1, ease: 'elastic.out(1, 0.3)' },
            "-=0.5"
        );

        // ...rest of your code

    }, []);


    return (

        <>
            <div className="svg-overlay">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path id="revealPath" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                </svg>
            </div>

            <div className="works">
                <div className="workpage-heading">
                    <PipeDreamEventsHeader />
                </div>
                <div className="rendering-layout">





                    <Row1 className="rendering-row" />



                    <Row2 className="rendering-row" />
                    <Row3 className="rendering-row" />

                    <div className="rendering-row-video">

                        <div className="bb-video-container">
                            <video

                                width="100%"
                                height="100%"
                                margin-top="1px"
                                loop
                                autoPlay
                                muted
                                playsInline
                            >
                                <source src="https://mylgcontent.s3.us-west-1.amazonaws.com/31-Pipedream+Events/01.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>

                    </div>




                    <Row4 className="rendering-row" />


                    <div className="rendering-row-video">

                        <div className="bb-video-container">
                            <video

                                width="100%"
                                height="100%"
                                margin-top="1px"
                                loop
                                autoPlay
                                muted
                                playsInline
                            >
                                <source src="https://mylgcontent.s3.us-west-1.amazonaws.com/31-Pipedream+Events/02.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>

                    </div>


                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/31-Pipedream+Events/03.png" alt="pipedreamevents Image" width="100%" height="100%" />
                        </div>
                      

                    </div>



                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/31-Pipedream+Events/04.png" alt="pipedreamevents Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/31-Pipedream+Events/05.png" alt="pipedreamevents Image" width="100%" height="100%" />
                        </div>



                    </div>

                    <Row5 className="rendering-row" />


                    <div className="rendering-row-video">

                        <div className="bb-video-container">
                            <video

                                width="100%"
                                height="100%"
                                loop
                                autoPlay
                                muted
                                playsInline
                            >
                                <source src="https://mylgcontent.s3.us-west-1.amazonaws.com/31-Pipedream+Events/03.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>

                    </div>






                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/31-Pipedream+Events/07.png" alt="pipedreamevents Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/31-Pipedream+Events/08.png" alt="pipedreamevents Image" width="100%" height="100%" />
                        </div>



                    </div>





                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/31-Pipedream+Events/09.png" alt="pipedreamevents Image" width="100%" height="100%" />
                        </div>




                    </div>


                    <Row6 className="rendering-row" />



                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/31-Pipedream+Events/10.png" alt="pipedreamevents Image" width="100%" height="100%" />
                        </div>
                      



                    </div>

                   

                  


                    

                  






                  
                </div>


                
                <hr style={{ opacity: "1", color: "fff", height: "2px", backgroundColor: "#fff", margin: "0.5rem", }} />



                <div className="rendering-layout">






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

export default pipedreamevents;
