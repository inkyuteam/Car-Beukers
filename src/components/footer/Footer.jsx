import React from "react";
import "./Footer.css";
import right from "../../assets/arrow-right.svg";
import { MenuBar } from "../common/Menu/MenuBar";
import arrow from "../../assets/arrow-top-right.svg";
import instagram from "../../assets/social-icons/instagram.svg"
import linkedin from "../../assets/social-icons/linkedin.svg"
import twitter from "../../assets/social-icons/twitter.svg"
import youtube from "../../assets/social-icons/youtube.svg"

export const Footer = ({ menus }) => {
  return (
    <div className="page-footer">
      <div className="track">
        <div className="content">
          <div className="text">
            Abonneer je om op de hoogte te blijven van ons laatste nieuws,
            updates.
          </div>
          <div className="input">
            <input placeholder="Voer uw e-mailadres in. *" />
            <img src={right} alt="" />
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <div className="reheader">
          <MenuBar
            labels={menus}
            icons={Array(menus.length).fill(arrow)}
            size="bg"
          />
        </div>
        <div className="last-content">
          <MenuBar
            labels={[
              "© 2023 Car Beukers. All Rights Reserved.",
              "Terms",
              "Privacy",
              "Cookies",
              "Legal",
              "Recalls",
              "Made by Grandsolution",
            ]}
            size="sm"
          />
          <MenuBar
            icons={[instagram, linkedin, twitter, youtube]}
            size="md"
          />
        </div>
      </div>
    </div>
  );
};
