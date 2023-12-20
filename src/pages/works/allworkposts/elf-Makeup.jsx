import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import "./style.css";

import works from '../works.json';
import BlogPostButton from "../../../pages/blog/blogpostbutton/BlogPostButton.js";
import { ReactComponent as ElfHeader } from "../../../assets/svg/elf-makeup/elfmakeupheader.svg";

import { ReactComponent as Row0 } from "../../../assets/svg/elf-makeup/row0.svg";
import { ReactComponent as Row1 } from "../../../assets/svg/elf-makeup/row1.svg";

import Ticker from "../../../components/ticker/index.jsx";
import { InfoSection } from "../../../components/infosection/index.js";
import SingleTicker from "../../../components/singleticker/index.jsx";

import Counter from "../../../counter.jsx";

const AcademyOfPop = () => {


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
                    <ElfHeader />
                </div>
                <div className="rendering-layout">





                    <Row0 className="rendering-row" />


                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/05.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>


                    </div>

                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/06.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/07.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>



                    </div>

                    
                    <div className="rendering-row-img">

                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/08.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/09.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>



                    </div>

                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/10.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/11.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>



                    </div>
                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/12.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/13.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>



                    </div>

                    <Row1 className="rendering-row" />

                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/19.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/28.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/22.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>


                    </div>

                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/24.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/26.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/23.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>


                    </div>

                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/20.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/27.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/25.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>


                    </div>

                    <div className="rendering-row-img">


                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/30.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/21.png" alt="Academy of Pop Image" width="100%" height="100%" />
                        </div>
                        <div className="img-container ">


                            <img src="https://d2qb21tb4meex0.cloudfront.net/08-elf+Makeup/29.png" alt="Academy of Pop Image" width="100%" height="100%" />
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


export default AcademyOfPop;
