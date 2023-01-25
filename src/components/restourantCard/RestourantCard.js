import React from "react";

import RestoranAtina from "../../assets/RestoranAtina.png";

const RestourantCard = () => {
  return (
    <div className="restourant-card">
      <div className="restourant-card-conatiner">
        <img
          className="restourant-card-conatiner-img"
          src={RestoranAtina}
          alt="slika"
        />
      </div>
      <div className="restourant-card-name">Naziv Restorana</div>
      <div className="restourant-card-tip">
        <div className="restourant-card-tip-restourant">Restorani</div>
        <div className="restourant-card-tip-tip">Tip Restorana</div>
      </div>
      <div className="restourant-card-rating">
        <div className="restourant-card-rating-number">4.5</div>
        <div className="restourant-card-rating-star">zvezdice</div>
      </div>
    </div>
  );
};

export default RestourantCard;
