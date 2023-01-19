import React from "react";

import { Icon } from "@iconify/react";
import logo from "../../assets/logo.png";
import AppStore from "../../assets/AppStore.png";
import GooglePlay from "../../assets/GooglePlay.png";
import { InstagramSvg, FacebookSvg, TiktokSvg } from "../../assets/svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="logo" />
          <img src={AppStore} alt="Aple store" />
          <img src={GooglePlay} alt="Google store" />
        </div>

        <div className="footer-top-right">
          <InstagramSvg className="footer-top-right-icon" />
          <FacebookSvg />
          <TiktokSvg />
          <div className="footer-"> &copy; Moja Klopica 2022</div>
        </div>
      </div>
      <div className="footer-line" />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div>
            <Icon icon="gis:location-poi" />
            lokacija
          </div>
          <div>
            <Icon icon="ri:earth-line" />
            srbija
          </div>
        </div>
        <div className="footer-bottom-right">
          <div>FAQ</div>
          <div>Obavestenje p privatnosti</div>
          <div>uslovi koriscenja</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
