import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import "./style.css";

import { ReactComponent as BeSweet16Header } from "../../../assets/svg/besweet16/besweet16header.svg";
import works from '../works.json';
import BlogPostButton from "../../../pages/blog/blogpostbutton/BlogPostButton.js";
import { ReactComponent as Row0 } from "../../../assets/svg/besweet16/row0.svg";
import { ReactComponent as Row1 } from "../../../assets/svg/besweet16/row1.svg";





import Ticker from "../../../components/ticker/index.jsx";
import { InfoSection } from "../../../components/infosection/index.js";
import SingleTicker from "../../../components/singleticker/index.jsx";



const BeSweet16 = () => {

    const tickerLines = [
        "YOU ARE THE CAUSE OF MY EUPHORIA ",
        "YOU DESERVE TO BE HAPPY ",
        "I KNOW WHAT I WANT AND I'M NOT AFRAID TO GO AFTER IT "

    ];

    
    let worksRefs = useRef([]);
    const maxPosts = 16;
    const [displayedWorks, setDisplayedWorks] = useState([]);


   
    useEffect(() => {
        console.log("Current worksRefs:", worksRefs.current);
    }, [displayedWorks]);

    useEffect(() => {
        setDisplayedWorks(works.slice(0, maxPosts)); // Adjust 'maxPosts' as needed
      }, [maxPosts]);
      
    
   

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
                    <BeSweet16Header />
                </div>
                <div className="rendering-layout">






                    <Row0 className="rendering-row" />
                    <Row1 className="rendering-row" />



                    <div class="grid-container-gca second-grid-gca" style={{ gridTemplateColumns: '0.3fr 0.7fr', padding: '0.25vw' }}>


                        <div class="column-gca">
                            <div class="top-row-gca content-item"> <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/02+(2).png" alt="Ghost-Circus-Apparel Image" width="100%" /></div>
                            <div class="bottom-row-gca content-item"> <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/02.png" alt="Ghost-Circus-Apparel Image" width="100%" /></div>
                        </div>

                        <div class="full-height-column-gca content-item">
                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/03.png" alt="Ghost-Circus-Apparel Image" width="100%" height="100%" />
                        </div>


                    </div>





                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/04.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>




                    </div>


                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/05.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/06.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>



                    </div>





                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/07.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>




                    </div>

                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/08.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/09.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>




                    </div>

                </div>


                <div className="rendering-ticker-section">

                    <Ticker lines={tickerLines} />
                </div>
                <hr style={{ opacity: "1", color: "fff", height: "2px", backgroundColor: "#fff", margin: "0.5rem", }} />





                <div className="rendering-layout">



                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/10.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/11.png" alt="Be Sweet 16 Image" width="100%" height="100%" />

                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/12.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>


                    </div>   <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/13.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/14.png" alt="Be Sweet 16 Image" width="100%" height="100%" />

                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/15.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>


                    </div>   <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/16.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/17.png" alt="Be Sweet 16 Image" width="100%" height="100%" />

                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/18.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>


                    </div>   <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/19.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/20.png" alt="Be Sweet 16 Image" width="100%" height="100%" />

                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/21.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>


                    </div>   <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/22.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/23.png" alt="Be Sweet 16 Image" width="100%" height="100%" />

                        </div>

                        <div className="img-container ">


                            <img src="https://mylgcontent.s3.us-west-1.amazonaws.com/13-Be+Sweet+16/24.png" alt="Be Sweet 16 Image" width="100%" height="100%" />
                        </div>


                    </div>



                </div>




                <div className="rendering-layout">

                    <div className="works-titles">

                        {displayedWorks.map((work, index) => (
                            <div className="blog-title-container" key={index} ref={(el) => {
                                if (el && !worksRefs.current.includes(el)) { // Only add if it's a new element
                                    worksRefs.current[index] = el;
                                }
                            }}
                            >



                                <BlogPostButton post={work} />
                            </div>

                        ))}

                    </div>

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

export default BeSweet16;
