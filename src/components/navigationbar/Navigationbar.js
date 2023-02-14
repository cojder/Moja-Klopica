import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.png";
import {
  ABOUT_RESTOURANT,
  FREQUENTLY_ASKED_QUESTIONS,
} from "../../constants/paths";

const Navigationbar = () => {
  return (
    <div className="first">
      <div className="navigationbar">
        <div className="navigationbar-left">
          <img className="navigationbar-logo" src={logo} alt="logo" />
        </div>
        <div className="navigationbar-right">
          <Link
            to="/"
            className={
              window.location.pathname === "/"
                ? "navigationbar-right-login-button-active"
                : "navigationbar-right-login-button"
            }
          >
            pocetna
          </Link>
          <Link
            to={`${ABOUT_RESTOURANT}/:id`}
            className={
              window.location.pathname === `${ABOUT_RESTOURANT}/:id`
                ? "navigationbar-right-login-button-active"
                : "navigationbar-right-login-button"
            }
          >
            Rezervisi
          </Link>
          <Link
            to={FREQUENTLY_ASKED_QUESTIONS}
            className={
              window.location.pathname === `${FREQUENTLY_ASKED_QUESTIONS}`
                ? "navigationbar-right-login-button-active"
                : "navigationbar-right-login-button"
            }
          >
            O nama
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
