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
        <Link to={`${ABOUT_RESTOURANT}/:id`}>
          <button className="restourant-nav-bar-navigationbar-restourant">
            <House /> O Restoranu
          </button>
        </Link>
        <Link to={`${MENI}/:id`}>
          <button className="restourant-nav-bar-navigationbar-meni">
            <Notepad />
            Meni
          </button>
        </Link>
        <Link to={`${IMPRESSIONS}/:id`}>
          <button className="restourant-nav-bar-navigationbar-impressions">
            <Star />
            Utisci
          </button>
        </Link>
        <Link to={`${GALERY}/:id`}>
          <button className="restourant-nav-bar-navigationbar-galery">
            <Galery />
            Galerija
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RestourantNavBar;
