import React from "react";

import GaleryImg from "../../assets/TopFood.png";

const GaleryCard = () => {
  return (
    <div className="galery-card">
      <img className="galery-card-img" src={GaleryImg} alt="slika" />
    </div>
  );
};

export default GaleryCard;
