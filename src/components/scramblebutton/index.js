import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrambleText from "scramble-text";
import "./style.css";  

export const ScrambleButton = ({ text, to, className, submitMode,  ...props }) => {
    const btnRef = useRef(null);
    const isHoveredRef = useRef(false);
    const [originalColor, setOriginalColor] = useState(null);

    let scrambleInstance = null;

    const handleMouseEnter = () => {
        isHoveredRef.current = true;
        const btnElem = btnRef.current;
        const scrambledElem = btnElem.querySelector(".scrambled");
        if (scrambledElem && !scrambleInstance) {
            
            // Lock the width of the button
            btnElem.style.width = `${btnElem.offsetWidth}px`;

            scrambleInstance = new ScrambleText(scrambledElem, {
                timeOffset: 12.5,
                chars: ["o", "¦"],
                callback: () => {
                    if (isHoveredRef.current) { // Only change color if still hovered
                        scrambledElem.style.color = "#FA3356";
                    }
                    scrambleInstance = null;
                }
            });
            scrambleInstance.start().play();
        }
    };

    const handleMouseLeave = () => {
        isHoveredRef.current = false;
        const scrambledElem = btnRef.current.querySelector(".scrambled");
        if (scrambledElem) {
            scrambledElem.style.color = originalColor || "var(--text-color)"; // Use the original color if available
        }
    };

    useEffect(() => {
        // Capture the original color
        const scrambledElem = btnRef.current.querySelector(".scrambled");
        if (scrambledElem) {
            setOriginalColor(getComputedStyle(scrambledElem).color);
        }
    
        // Handle resize
        const handleResize = () => {
            const btnElem = btnRef.current;
            if (btnElem) {
                btnElem.style.width = 'auto'; // Reset to auto to let it adapt naturally
            }
        };
    
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures this useEffect runs only once, similar to componentDidMount
    
    if (submitMode) {
        return (
            <button 
                type="submit" 
                className={`scramble-button ${className}`} 
                ref={btnRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                <span className="scrambled">{text}</span>
            </button>
        );
    }

    return (
        <Link to={to}>
            <button 
                className={`scramble-button ${className}`} 
                ref={btnRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                <span className="scrambled">{text}</span>
            </button>
        </Link>
    );
};

export default ScrambleButton;
