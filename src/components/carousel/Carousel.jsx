import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Carousel.css";
import car1 from "../../assets/cars/car1.png";
import car2 from "../../assets/cars/car2.png";
import car3 from "../../assets/cars/car3.png";

import { Button } from "../common/Button/Button";

export const Carousel = React.memo(
  () => {
    const carRef = useRef();
    const [images, setImages] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(2);
    const [arrowButtonFlag, setArrowButtonFlag] = useState(true);

    const goToPrevious = () => {
      if (!arrowButtonFlag) {
        return;
      }
      setArrowButtonFlag(false);
      setSelectedImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTimeout(() => {
        setArrowButtonFlag(true);
      }, 500);
    };

    const goToNext = () => {
      if (!arrowButtonFlag) {
        return;
      }
      setArrowButtonFlag(false);
      setSelectedImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => {
        setArrowButtonFlag(true);
      }, 500);
    };

    const handleAnimationComplete = () => {
      if (images.length >= 1) {
        if (selectedImageIndex > 2) {
          const first = images.shift();
          setImages([...images, first]);
        } else {
          const last = images.pop();
          setImages([last, ...images]);
        }
        setSelectedImageIndex(2);
        setTimeout(()=>{gsap.to(".carousel", {
          x: -440,
          width: carRef.current.offsetWidth,
          duration: 0.0,
        })}, 0);
      }
    };

    useEffect(() => {
      setImages([car1, car2, car3, car1, car2, car3, car1, car2, car3]);
      gsap.to(".carousel", {
        x: -270 * selectedImageIndex + 100,
        width: carRef.current.offsetWidth + 270 * selectedImageIndex,
        duration: 0.5,
        onComplete: handleAnimationComplete,
      });
    }, []);

    useLayoutEffect(() => {
      if (selectedImageIndex === 2) {
        return;
      }
      gsap.to(".carousel", {
        x: -270 * selectedImageIndex + 100,
        width: carRef.current.offsetWidth,
        duration: 0.5,
        onComplete: handleAnimationComplete,
      });
    }, [selectedImageIndex]);
    console.log(12345);
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
              <img
                src={image}
                alt=""
                className={`${
                  selectedImageIndex !== 2
                    ? "animation-img"
                    : "no-animation-img"
                }`}
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
  },
  () => true
);
