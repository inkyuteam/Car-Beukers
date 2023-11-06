import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Carousel.css";
import car1 from "../../assets/cars/car1.png";
import car2 from "../../assets/cars/car2.png";
import car3 from "../../assets/cars/car3.png";

import { Button } from "../common/Button/Button";

const sources = [car1, car2, car3];
let images = [];
while(images.length < 30) {
  images = [...images, ...sources]
}

export const Carousel = React.memo(
  () => {
    const carRef = useRef();
    const [tarImageIndex, setTarImageIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const goToPrevious = () => {
      setTarImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const goToNext = () => {
      setTarImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    useLayoutEffect(() => {
      const timer = setTimeout(() => {
        if (tarImageIndex != selectedImageIndex)
          setSelectedImageIndex((prevIndex) =>
            prevIndex < tarImageIndex ? prevIndex + 1 : prevIndex - 1
          );
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }, [tarImageIndex, selectedImageIndex]);

    const getImageStyle = (idx) => {
      let willHide = false;
      const imageCount = images.length;
      let delta = idx - selectedImageIndex;

      if (delta > 8) {
        delta -= imageCount;
      }
      if (delta < -6) {
        delta += imageCount;
      }

      if (delta < -6 || delta > 6) willHide = true;
      
      let nextLeft = 320 * delta + (delta > 0 ? 400 : 100);

      return { left: `${nextLeft}px`, opacity: willHide ? 0 : 1 };
    };

    return (
      <div className="carousel-container">
        <div className="carousel" ref={carRef}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-image ${
                index === selectedImageIndex ? "selected" : ""
              }`}
              onClick={()=>{setTarImageIndex(index)}}
              style={getImageStyle(index)}
            >
              <img
                src={image}
                alt={`image-${index}`}
              />
            </div>
          ))}
        </div>
        <button className="carousel-button left" onClick={goToPrevious}>
          &lt;
        </button>
        <button className="carousel-button right" onClick={goToNext}>
          &gt;
        </button>
        <div className="car-description">
          <div className="car-title">Tesla Model S Plaid</div>
          <div className="car-sub-title">
            Roadster 63 4MATIC+ | Burmester | Airscarf | Premium Leder |
          </div>
          <div>
            <table className="car-details">
              <thead>
                <tr>
                  <td>Jaar</td>
                  <td>Km Stand</td>
                  <td>Prijs</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023</td>
                  <td>19.000km</td>
                  <td>€ 229.950,-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <Button label="Bekijk model" type="fillout" />
          </div>
        </div>
      </div>
    );
  },
  () => true
);
