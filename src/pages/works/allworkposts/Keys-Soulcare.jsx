import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import "./style.css";
import worksData from '../works.json';
import aFLowerBathData from './A-Flower-Bath.json';
import { ReactComponent as KeysSoulCareHeader } from "../../../assets/svg/keyssoulcare/keyssoulcareheader.svg";

import { ReactComponent as Row1 } from "../../../assets/svg/keyssoulcare/row1.svg";
import { ReactComponent as Row2 } from "../../../assets/svg/keyssoulcare/row2.svg";
import { ReactComponent as Row3 } from "../../../assets/svg/keyssoulcare/row3.svg";
import { ReactComponent as Row4 } from "../../../assets/svg/keyssoulcare/row4.svg";
import { ReactComponent as Row5 } from "../../../assets/svg/keyssoulcare/row5.svg";
import { ReactComponent as Row6 } from "../../../assets/svg/keyssoulcare/row6.svg";
import { ReactComponent as Row7 } from "../../../assets/svg/keyssoulcare/row7.svg";



import Ticker from "../../../components/ticker/index.jsx";
import { InfoSection } from "../../../components/infosection/index.js";
import SingleTicker from "../../../components/singleticker/index.jsx";

import Counter from "../../../counter.jsx";

const KeysSoulcare = () => {


    let galleryRefs = useRef([]);


    const tickerLines = [
        "KEYS SOULCARE HALLER 6 ",
        "DESIGN BY MOKIBABY",
        "DIGITAL ART BY *MYLG!*"
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
                    <KeysSoulCareHeader />
                </div>
                <div className="rendering-layout">





                    <Row1 className="rendering-row" />



                    <Row2 className="rendering-row" />
                    <Row3 className="rendering-row" />



                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/02.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/03.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>


                    </div>



                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/05.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/04.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>



                    </div>


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
                                <source src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/03.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>

                    </div>


                    <Row4 className="rendering-row" />



                    <div class="grid-container">
                        <div class="column">
                            <div class="top-row content-item"> <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/06.png" alt="Keys-Soulcare Image" width="100%" height="100%" /></div>
                            <div class="bottom-row content-item"> <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/07.png" alt="Keys-Soulcare Image" width="100%" height="100%" /></div>
                        </div>
                        <div class="full-height-column content-item">
                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/08.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                    </div>


                    <div class="grid-container second-grid">

                        <div class="full-height-column content-item">
                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/09.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div class="column">
                            <div class="top-row content-item"> <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/11.png" alt="Keys-Soulcare Image" width="100%" height="100%" /></div>
                            <div class="bottom-row content-item"> <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/10.png" alt="Keys-Soulcare Image" width="100%" height="100%" /></div>
                        </div>

                    </div>





                    <div className="rendering-row-img" style={{ display: 'flex', width: '100%' }}>

                        <div className="img-container" style={{ flex: '1' }}>
                            <Row5 className="rendering-row" style={{ width: '100%', height: 'auto' }} />
                        </div>

                        <div className="img-container" style={{ flex: '1' }}>
                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/12.png" alt="Keys-Soulcare Image" style={{ width: '100%', height: 'auto' }} />
                        </div>

                    </div>







                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/13.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/14.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>



                    </div>

                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/15.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/16.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>



                    </div>



                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/16.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/17.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>



                    </div>


                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/18.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/19.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>



                    </div>








                    <Row6 className="rendering-row-svg" />






                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/20.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/21.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>




                    </div>



                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/22.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>




                    </div>


                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/23.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/24.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>




                    </div>

                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/25.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/26.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>




                    </div>

                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/27.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>





                    </div>

                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/28.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/29.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>




                    </div>

                    <div className="rendering-row-img" style={{ display: 'flex', width: '100%' }}>

                        <div className="img-container" style={{ flex: '1' }}>
                            <Row7 className="rendering-row" style={{ width: '100%', height: 'auto' }} />
                        </div>

                        <div className="img-container" style={{ flex: '1' }}>
                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/30.png" alt="Keys-Soulcare Image" style={{ width: '100%', height: 'auto' }} />
                        </div>

                    </div>

                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/31.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/32.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>




                    </div>

                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/33.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/34.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/35.png" alt="Keys-Soulcare Image" width="100%" height="100%" />
                        </div>




                    </div>

                    
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
                                <source src="https://d2qb21tb4meex0.cloudfront.net/19-Keys+Soulcare/00.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>

                    </div>














                </div>


                <div className="rendering-ticker-section">

                    <Ticker lines={tickerLines} />
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

export default KeysSoulcare;
