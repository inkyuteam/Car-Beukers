import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Carousel.css";
import car1 from "../../assets/cars/car1.png";
import car2 from "../../assets/cars/car2.png";
import car3 from "../../assets/cars/car3.png";

import { Button } from "../common/Button/Button";

// let flag = false;

export const Carousel = () => {
  const carRef = useRef();
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(2);

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleAnimationComplete = () => {
    // const styles = getComputedStyle(carRef.current);
    // const tx = parseInt(styles.transform.split(",")[4]);
    // carRef.current.style.transform = "translateX(-490px)";
    // flag = true;
    // setSelectedImageIndex(2);
  };

  useEffect(() => {
    setImages([car1, car2, car3, car1, car2, car3, car1, car2, car3]);
  }, []);

  useLayoutEffect(() => {
    gsap.to(".carousel", {
      x: -270 * selectedImageIndex + 100,
      width: carRef.current.offsetWidth + 270 * selectedImageIndex,
      duration: 0.5,
      onComplete: handleAnimationComplete,
    });
  }, [selectedImageIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === selectedImageIndex ? "selected" : ""
            }`}
          >
            <img src={image} alt="" />
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
          <table>
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
};
