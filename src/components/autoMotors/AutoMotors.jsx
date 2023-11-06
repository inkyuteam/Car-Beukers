import React, { useEffect, useRef, useState } from "react";
import "./AutoMotors.css";
import outlineImg from "../../assets/outline-text.svg";
import BackgroundImage from "../../assets/background.png";
import { Button } from "../../components/common/Button/Button";

export const AutoMotors = () => {
  const backgroundRef = useRef(null);
  const textRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [imageY, setImageY] = useState(0);
  const [textY, setTextY] = useState(0);

  const scrollHandler = () => {
    const background = backgroundRef.current;

    if(background){
      const { y, height } = background.getBoundingClientRect();
      const { innerHeight } = window;
      
      if (y < innerHeight && y > -height) {
        const rate = parseInt((y / innerHeight) * 10)
        setScale((110 - rate) / 100);
        setImageY(rate*2)
      }
    }
  
    const text = textRef.current;

    if(text){
      const { y, height } = text.getBoundingClientRect();
      const { innerHeight } = window;

      if (y < innerHeight && y > -height) {
        const rate = parseInt(((y-height/2) / (innerHeight) ) * 10)
        setTextY(rate*4)
      }
    }
  };
  // 1~1.1
  // -20~20

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="auto-container">
      <div className="auto-main">
        <div
          className="auto-background"
          ref={backgroundRef}
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <img src={BackgroundImage} 
          style={{
            transform: `translateY(${imageY}%)`,
          }} alt="" />
        </div>
        <div className="auto-text" ref={textRef}>
          <img 
          style={{
            transform: `translateY(${textY}%)`,
          }} src={outlineImg} alt="" />
        </div>
        <div className="auto-buttons">
          <Button label="Auto kopen" type="fillout" />
          <Button label="Auto verkopen" type="fillout" />
        </div>
      </div>
    </div>
  );
};
