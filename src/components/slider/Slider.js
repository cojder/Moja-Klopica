import React from "react";

import RestoranAtina from "../../assets/RestoranAtina.png";

const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-element">
        <img className="slider-element-img" src={RestoranAtina} alt="slika" />
        <div className="slider-element-name">Naziv Restorana</div>
        <div className="slider-element-tip">
          <div className="slider-element-tip-restourant">Restorani</div>
          <div className="slider-element-tip-tip">Tip Restorana</div>
        </div>
        <div className="slider-element-rating">
          <div className="slider-element-rating-number">4.5</div>
          <div className="slider-element-rating-star">zvezdice</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
