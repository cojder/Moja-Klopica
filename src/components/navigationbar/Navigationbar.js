import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo.png";
import { RESERVE, ABOUT_US } from "../../constants/paths";

const Navigationbar = ({ colorRed }) => {
  return (
    <div className={colorRed ? "first-red" : "first"}>
      <div className="navigationbar">
        <div className="navigationbar-left">
          <img className="navigationbar-logo" src={logo} alt="logo" />
        </div>
        <div className="navigationbar-right">
          <Link
            to="/"
            className={
              colorRed
                ? window.location.pathname === "/"
                  ? "navigationbar-right-login-button-red-active"
                  : "navigationbar-right-login-button-red"
                : window.location.pathname === "/"
                ? "navigationbar-right-login-button-active"
                : "navigationbar-right-login-button"
            }
          >
            pocetna
          </Link>
          <Link
            to={`${RESERVE}/:id`}
            className={
              colorRed
                ? window.location.pathname === `${RESERVE}/:id`
                  ? "navigationbar-right-login-button-red-active"
                  : "navigationbar-right-login-button-red"
                : window.location.pathname === `${RESERVE}/:id`
                ? "navigationbar-right-login-button-active"
                : "navigationbar-right-login-button"
            }
          >
            Rezervisi
          </Link>
          <Link
            to={ABOUT_US}
            className={
              colorRed
                ? window.location.pathname === `${ABOUT_US}`
                  ? "navigationbar-right-login-button-red-active"
                  : "navigationbar-right-login-button-red"
                : window.location.pathname === `${ABOUT_US}`
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
