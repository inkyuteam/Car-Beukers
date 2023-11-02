import React from "react";
import { Button } from "../common/Button/Button";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="home">
        <video loop autoPlay muted className="video">
          <source src={require("../../assets/top.mp4")} type="video/ogg" />
        </video>
        <div className="footer">
          <div className="sub-content">
            <div className="sub-title">
              Beukers <br /> Automotive
            </div>
            <div className="button-group">
              <Button label="Contact" type="outlined" />
              <Button label="Collectie" type="fillout" />
            </div>
          </div>
          <div className="title">Car Beukers</div>
        </div>
      </div>
      <div className="home-plus">
        <div>Beuk de weg op met Beukers' bolides!</div>
        <div>
          Van klassiekers tot moderne parels, onze collectie aan unieke en
          bijzondere auto's staat klaar om ontdekt te worden. Neem een kijkje en
          vind de wagen die jouw hart sneller laat kloppen.
        </div>
      </div>
    </>
  );
};
