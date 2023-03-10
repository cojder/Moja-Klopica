import React from "react";
import { Link } from "react-router-dom";

import { House, Galery, Star, Notepad } from "../../assets/svg";
import {
  ABOUT_RESTOURANT,
  GALERY,
  IMPRESSIONS,
  MENI,
} from "../../constants/paths";

const RestourantNavBar = () => {
  return (
    <div className="restourant-nav-bar">
      <div className="restourant-nav-bar-navigationbar">
        <Link
          to={`${ABOUT_RESTOURANT}/:id`}
          className={
            window.location.pathname === `${ABOUT_RESTOURANT}/:id`
              ? "restourant-nav-bar-navigationbar-restourant-active"
              : "restourant-nav-bar-navigationbar-restourant"
          }
        >
          <House /> O Restoranu
        </Link>
        <Link
          to={`${MENI}/:id`}
          className={
            window.location.pathname === `${MENI}/:id`
              ? "restourant-nav-bar-navigationbar-meni-active"
              : "restourant-nav-bar-navigationbar-meni"
          }
        >
          <Notepad />
          Meni
        </Link>
        <Link
          to={`${IMPRESSIONS}/:id`}
          className={
            window.location.pathname === `${IMPRESSIONS}/:id`
              ? "restourant-nav-bar-navigationbar-impressions-active"
              : "restourant-nav-bar-navigationbar-impressions"
          }
        >
          <Star />
          Utisci
        </Link>
        <Link
          to={`${GALERY}/:id`}
          className={
            window.location.pathname === `${GALERY}/:id`
              ? "restourant-nav-bar-navigationbar-galery-active"
              : "restourant-nav-bar-navigationbar-galery"
          }
        >
          <Galery />
          Galerija
        </Link>
      </div>
    </div>
  );
};

export default RestourantNavBar;
