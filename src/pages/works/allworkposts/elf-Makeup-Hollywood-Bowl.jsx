import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import "./style.css";

import { ReactComponent as ElfMakeupHollywoodBowl } from "../../../assets/svg/elf-makeup-hollywood-bowl/elfmakeuphollywoodbowlheader.svg";

import { ReactComponent as Row0 } from "../../../assets/svg/elf-makeup-hollywood-bowl/row0.svg";
import { ReactComponent as Row1 } from "../../../assets/svg/elf-makeup-hollywood-bowl/row1.svg";
import { ReactComponent as Row2 } from "../../../assets/svg/elf-makeup-hollywood-bowl/row2.svg";





import Ticker from "../../../components/ticker/index.jsx";
import { InfoSection } from "../../../components/infosection/index.js";
import SingleTicker from "../../../components/singleticker/index.jsx";

import Counter from "../../../counter.jsx";

const TheOscars = () => {


    let galleryRefs = useRef([]);


    const tickerLines = [
        "DESIGN BY MOKIBABY ",
        "e.l.f MAKEUP HOLLYWOOD BOWL ",
        "DIGITAL ART BY *MYLG!* "

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
                    <ElfMakeupHollywoodBowl />
                </div>
                <div className="rendering-layout">







                    <Row0 className="rendering-row" />
                    <Row1 className="rendering-row" />

                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/02.png" alt="The Oscars image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/03.png" alt="The Oscars image" width="100%" height="100%" />
                        </div>






                    </div>


                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/04.png" alt="The Oscars image" width="100%" height="100%" />
                        </div>


                    </div>



                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/05.png" alt="The Oscars image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/06.png" alt="The Oscars image" width="100%" height="100%" />
                        </div>




                    </div>


                    <div class="grid-container-gca second-grid-gca" style={{ gridTemplateColumns: '0.7fr 0.3fr', padding: '0.25vw' }}>

                        <div class="full-height-column-gca content-item">
                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/07.png" alt="Ghost-Circus-Apparel Image" width="100%" height="100%" />
                        </div>
                        <div class="column-gca">
                            <div class="top-row-gca content-item"> <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/08.png" alt="Ghost-Circus-Apparel Image" width="100%" /></div>
                            <div class="bottom-row-gca content-item"> <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/09.png" alt="Ghost-Circus-Apparel Image" width="100%" /></div>
                        </div>

                    </div>

                    <Row2 className="rendering-row" />





                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/10.png" alt="The Oscars image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/11.png" alt="The Oscars image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/12.png" alt="The Oscars image" width="100%" height="100%" />
                        </div>






                    </div>
                    <div className="rendering-row-img" style={{paddingBottom: '5vh' }}>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/13.png" alt="The Oscars image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/14.png" alt="The Oscars image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/10-elf+Makeup+hollywood+bowl/15.png" alt="The Oscars image" width="100%" height="100%" />
                        </div>






                    </div>

                    








































                </div>

                <hr style={{ opacity: "1", color: "fff", height: "2px", backgroundColor: "#fff", margin: "0.5rem", }} />
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

export default TheOscars;
