import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./AutoMotors.css";
import outlineImg from "../../assets/outline-text.svg";
import { Button } from "../../components/common/Button/Button";

export const AutoMotors = () => {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let previousScrollY = 0; 
    
    const scrollHandler = () => {
      const text = textRef.current;
      const background = backgroundRef.current;
  
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - previousScrollY; // Calculate the change in scroll position
  
      if(Math.abs(scrollDelta) < 30) {
        gsap.to(background, { backgroundPosition: `0% ${50-scrollDelta}%` });
        gsap.to(text, { y: scrollDelta * 10 });
      }
  
      previousScrollY = scrollY; // Update the previous scroll position
    };

    window.addEventListener('scroll', scrollHandler);
    gsap.to(backgroundRef.current, { backgroundPosition: '0% -50%' }); // Set initial background position
    scrollHandler(); // Initial call to set the animation at the top
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className="auto-container" ref={containerRef}>
      <div className="auto-main">
        <div className="auto-background" ref={backgroundRef}></div>
        <div className="auto-text" ref={textRef}>
          <img src={outlineImg} alt="" />
        </div>
        <div className="auto-buttons">
          <Button label="Auto kopen" type="fillout" />
          <Button label="Auto verkopen" type="fillout" />
        </div>
      </div>
    </div>
  );
};
