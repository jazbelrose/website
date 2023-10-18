import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "./style.css";

const Ticker = () => {
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

        const repeatedContent = (text, times = 4) => {
        let result = "";
        for (let i = 0; i < times; i++) {
            result += text;
        }
        return result;
    }

    return (
        <div className="ticker-container">
            <div className="ticker">
                <span className="ticker-text ticker-text-1">{repeatedContent("L.A. +22 ← Paris, France +1  ←   New York. ←  London.  ←  California ")}</span>
            </div>
            <div className="ticker">
                <span className="ticker-text ticker-text-2">{repeatedContent("ADPTV.TROIA.NOCCO.PD. BAREBELLS.MISTIFI.ZAPPOS.THE GOLD PRINCESS.MOKIBABY  ")}</span>
            </div>
            <div className="ticker">
                <span className="ticker-text ticker-text-3">{repeatedContent("34.0549° N, 118.2426° W 48.8566° N, 2.3522° E 40.7128° N, 74.0060° W 51.5072° N, 0.1276° W")}</span>
            </div>
        </div>
    );
}

export default Ticker;
