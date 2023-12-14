import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./style.css";

const Ticker = ({ lines, fontSize = '10vh' }) => {
    const lastScrollY = useRef(0);
    const lastScrollTime = useRef(Date.now());

    useEffect(() => {
        gsap.set(".ticker-text", { x: "0%" }); // This sets the starting position

        const tickers = [
            gsap.to(".ticker-text-1", {
                x: "-50%", // Since it's a single set of content
                duration: 480,
                repeat: -1,
                ease: "linear",
                paused: true
            }),
            gsap.to(".ticker-text-2", {
                x: "-50%",
                duration: 400,
                repeat: -1,
                ease: "linear",
                paused: true
            }),
            gsap.to(".ticker-text-3", {
                x: "-50%",
                duration: 440,
                repeat: -1,
                ease: "linear",
                paused: true
            })
        ];

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const currentTime = Date.now();
            const velocity = (currentScrollY - lastScrollY.current) / (currentTime - lastScrollTime.current);

            tickers.forEach(ticker => {
                ticker.timeScale(1 + Math.abs(velocity) * 10);
            });

            lastScrollY.current = currentScrollY;
            lastScrollTime.current = currentTime;
        };

        tickers.forEach(ticker => ticker.play());

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            tickers.forEach(ticker => ticker.kill());
        };
    }, []);

    const repeatedContent = (baseText, times = 10) => {
        return Array(times).fill(baseText).join("");
    };


    return (
        <div className="ticker-container">
            {lines.map((line, index) => (
                <div key={index} className="ticker">
                    <span
                        className={`ticker-text ticker-text-${(index % 3) + 1}`}
                        style={{ fontSize: fontSize }} // Apply font size here
                    >
                        {repeatedContent(line)}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Ticker;