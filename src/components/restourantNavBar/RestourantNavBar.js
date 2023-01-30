import React from "react";

import { House, Galery, Star, Notepad } from "../../assets/svg";

const RestourantNavBar = ({ setShowComponent }) => {
  return (
    <div className="restourant-nav-bar">
      <div className="restourant-nav-bar-navigationbar">
        <button
          onClick={() => setShowComponent("aboutRestourant")}
          className="restourant-nav-bar-navigationbar-restourant"
        >
          <House /> O Restoranu
        </button>
        <button
          onClick={() => setShowComponent("meni")}
          className="restourant-nav-bar-navigationbar-meni"
        >
          <Notepad />
          Meni
        </button>
        <button
          onClick={() => setShowComponent("impressions")}
          className="restourant-nav-bar-navigationbar-impressions"
        >
          <Star />
          Utisci
        </button>
        <button
          onClick={() => setShowComponent("galery")}
          className="restourant-nav-bar-navigationbar-galery"
        >
          <Galery />
          Galerija
        </button>
      </div>
    </div>
  );
};

export default RestourantNavBar;
