import React, { useLayoutEffect, useRef } from "react";
import "./HorizontalScroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import car1 from "../../assets/hs-cars/car1.png";
import car2 from "../../assets/hs-cars/car2.png";

gsap.registerPlugin(ScrollTrigger);

export const HorizontalScroll = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -50 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: component.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="hs-view">
      <div className="hs-container" ref={component}>
        <div className="hs-description">
          <div className="hs-title">Het hele pakket.</div>
          <div className="hs-text">
            Bij ons autobedrijf geen gedoe met pakketten of extra kosten. Onze
            prijzen zijn all-in, dus je koopt een auto en kunt direct de weg op.
            Eenvoudig, transparant en zonder verrassingen!
          </div>
        </div>
        <div ref={slider} className="hs-main-container">
          <div className="panel">
            <video loop autoPlay muted className="hs-video">
              <source src={require("../../assets/top.mp4")} type="video/ogg" />
            </video>
          </div>
          <div className="panel">
            <img src={car1} alt="" />
          </div>
          <div className="panel">
            <img src={car2} alt="" />
          </div>
          <div className="panel">
            <video loop autoPlay muted className="hs-video">
              <source src={require("../../assets/top.mp4")} type="video/ogg" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};
