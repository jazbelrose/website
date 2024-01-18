import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './style.css';


const Preloader = ({ setIsLoading }) => {
  const [open, setOpen] = useState(true);
  const svgRef = useRef(null);
  const containerRef = useRef(null); 

  useEffect(() => {
    // GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        setOpen(false);
      }
    });

    // Ellipse stroke animation
    tl.fromTo(
      svgRef.current.querySelector('ellipse'),
      { strokeDasharray: '0 502' },
      { strokeDasharray: '502 502', duration: 0.5 }
    );

    // Bounce effect
    tl.to(containerRef.current, {
      scale: 1.1, 
      duration: 0.25, 
      ease: "elastic.out(1.5, 0.1)"
    })
    
    .to(containerRef.current, {
      scale: 1, 
      duration: 0.1
    });

    // Fade out and move up
    tl.to(containerRef.current, {
      y: -100, 
      opacity: 0,
      duration: 0.5
    });

    return () => clearTimeout();
  }, [open, setIsLoading]);





  return (
    <div ref={containerRef} className='container' onClick={() => setOpen(state => !state)}>
      <svg ref={svgRef} viewBox="0 0 256 256" >
        
        <text x="50%" y="50%" textAnchor="middle" fill="#fff" dy=".3em" fontSize="30">*MYLG!*</text>

        <ellipse
          cx="128"
          cy="128"
          rx="80"
          ry="80"
          fill="none"
          stroke="#fff"
          strokeWidth="5"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0, 502"
            to="502, 502" 
            dur=".5s"
            begin="0s"
            fill="freeze"
          />
        </ellipse>
      </svg>
    </div>
  );
};

export default Preloader;