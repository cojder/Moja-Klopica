import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import logo from "../../assets/Logo.png";
import { ABOUT_US } from "../../constants/paths";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img className="footer-left-logo" src={logo} alt="logo" />

        <div className="footer-left-icon">
          <Icon icon="gis:location-poi" />
          Srbija
        </div>
        <div className="footer-left-icon">
          <Icon icon="ri:earth-line" />
          Srpski
        </div>
      </div>
      <div className="footer-right">
        <Link className="footer-right-aboutus" to={ABOUT_US}>
          FAQ
        </Link>
        <Link className="footer-right-aboutus" to={ABOUT_US}>
          Obaveštenje o privatnosti
        </Link>
        <Link className="footer-right-aboutus" to={ABOUT_US}>
          Uslovi korišcenja
        </Link>
        <div className="footer-rght-copy"> &copy; Moja Klopica 2022</div>
      </div>
    </div>
  );
};

export default Footer;
