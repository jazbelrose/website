import React, { useRef, useEffect, } from "react";
import { Link } from "react-router-dom";
import ScrambleText from "scramble-text";
import "./style.css";  

export const ScrambleButton = ({ text, to, className, submitMode,  ...props }) => {
    const btnRef = useRef(null);
    const isHoveredRef = useRef(false);

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
                        scrambledElem.style.color = "red";
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
            scrambledElem.style.color = "var(--text-color)"; // Reset the color
        }
    };

    useEffect(() => {
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
    }, []);
    
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
