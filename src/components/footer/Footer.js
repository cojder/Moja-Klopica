import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import logo from "../../assets/Logo.png";
import AppStore from "../../assets/AppStore.png";
import GooglePlay from "../../assets/GooglePlay.png";
import { InstagramSvg, FacebookSvg, TiktokSvg } from "../../assets/svg";
import {
  FREQUENTLY_ASKED_QUESTIONS,
  PRIVACY_POLICY,
  TERMS_OF_USAEGE,
} from "../../constants/paths";

const Footer = () => {
  const clickedImg = () => {
    console.log("clicked on img");
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="logo" />
          <img
            className="footer-top-left-img"
            src={AppStore}
            alt="Aple store"
            onClick={() => clickedImg()}
          />
          <img
            className="footer-top-left-img"
            src={GooglePlay}
            alt="Google store"
            onClick={() => clickedImg()}
          />
        </div>

        <div className="footer-top-right">
          <InstagramSvg />
          <FacebookSvg />
          <TiktokSvg />
          <div className="footer-"> &copy; Moja Klopica 2022</div>
        </div>
      </div>
      <div className="footer-line" />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-bottom-left-icon">
            <Icon icon="gis:location-poi" />
            lokacija
          </div>
          <div className="footer-bottom-left-icon">
            <Icon icon="ri:earth-line" />
            srbija
          </div>
        </div>
        <div className="footer-bottom-right">
          <Link to={FREQUENTLY_ASKED_QUESTIONS}>FAQ</Link>
          <Link to={TERMS_OF_USAEGE}>Obaveštenje o privatnosti</Link>
          <Link to={PRIVACY_POLICY}>Uslovi korišcenja</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
