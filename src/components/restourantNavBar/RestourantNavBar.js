import React from "react";

import { House, Galery, Star, Notepad } from "../../assets/svg";

const RestourantNavBar = () => {
  return (
    <div className="restourant-nav-bar">
      <div className="restourant-nav-bar-navigationbar">
        <div className="restourant-nav-bar-navigationbar-restourant">
          <House /> O Restoranu
        </div>
        <div className="restourant-nav-bar-navigationbar-meni">
          <Notepad />
          Meni
        </div>
        <div className="restourant-nav-bar-navigationbar-impressions">
          <Star />
          Utisci
        </div>
        <div className="restourant-nav-bar-navigationbar-galery">
          <Galery />
          Galerija
        </div>
      </div>
    </div>
  );
};

export default RestourantNavBar;
