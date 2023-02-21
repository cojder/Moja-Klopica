import React from "react";

import GaleryImg from "../../assets/TopFood.png";

const Galery = () => {
  return (
    <div className="galery">
      <div className="galery-element">
        <img className="galery-element-img" src={GaleryImg} alt="slika" />
      </div>
      <div className="galery-element">
        <img className="galery-element-img" alt="slika" src={GaleryImg} />
      </div>
      <div className="galery-element">
        <img className="galery-element-img" alt="slika" src={GaleryImg} />
      </div>
      <div className="galery-element">
        <img className="galery-element-img" alt="slika" src={GaleryImg} />
      </div>
      <div className="galery-element">
        <img className="galery-element-img" alt="slika" src={GaleryImg} />
      </div>
      <div className="galery-element">
        <img className="galery-element-img" alt="slika" src={GaleryImg} />
      </div>
      <div className="galery-element">
        <img className="galery-element-img" alt="slika" src={GaleryImg} />
      </div>
    </div>
  );
};

export default Galery;
