import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import "./style.css";

import { ReactComponent as AgendaFestivalHeader } from "../../../assets/svg/agendafestival/agendafestivalheader.svg";

import { ReactComponent as Row0 } from "../../../assets/svg/agendafestival/row0.svg";
import { ReactComponent as Row1 } from "../../../assets/svg/agendafestival/row1.svg";
import { ReactComponent as Row2 } from "../../../assets/svg/agendafestival/row2.svg";
import { ReactComponent as Row3 } from "../../../assets/svg/agendafestival/row3.svg";
import { ReactComponent as Row5 } from "../../../assets/svg/ghostcircusapparel/row5.svg";
import { ReactComponent as Row6 } from "../../../assets/svg/ghostcircusapparel/row6.svg";
import { ReactComponent as Row7 } from "../../../assets/svg/ghostcircusapparel/row7.svg";




import Ticker from "../../../components/ticker/index.jsx";
import { InfoSection } from "../../../components/infosection/index.js";
import SingleTicker from "../../../components/singleticker/index.jsx";

import Counter from "../../../counter.jsx";

const AgendaFestival = () => {


    let galleryRefs = useRef([]);


    const tickerLines = [
        "AGENDA FESTIVAL ",
        "LONG BEACH ",
        "DESIGN BY *MYLG!* "

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
                    <AgendaFestivalHeader />
                </div>
                <div className="rendering-layout">





                    <Row0 className="rendering-row" />
                    <Row1 className="rendering-row" />

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
                                <source src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/00.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </div>

                    </div>

                    <Row2 className="rendering-row" />












                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/01.png" alt="nocco image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/02.png" alt="nocco image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/03.png" alt="nocco image" width="100%" height="100%" />
                        </div>



                    </div>

                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/04.png" alt="nocco image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/05.png" alt="nocco image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/06.png" alt="nocco image" width="100%" height="100%" />
                        </div>



                    </div>
                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/07.png" alt="nocco image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/08.png" alt="nocco image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/09.png" alt="nocco image" width="100%" height="100%" />
                        </div>



                    </div>

                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/10.png" alt="nocco image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/11.png" alt="nocco image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/12.png" alt="nocco image" width="100%" height="100%" />
                        </div>



                    </div>

                    <Row3 className="rendering-row" />












                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/13.png" alt="nocco image" width="100%" height="100%" />
                        </div>


                    </div>

                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/14.png" alt="nocco image" width="100%" height="100%" />
                        </div>


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/15.png" alt="nocco image" width="100%" height="100%" />
                        </div>
                    </div>




                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/16.png" alt="nocco image" width="100%" height="100%" />
                        </div>


                    </div>


                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/17.png" alt="nocco image" width="100%" height="100%" />
                        </div>


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/01-Agenda+Festival/18.png" alt="nocco image" width="100%" height="100%" />
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

export default AgendaFestival;
