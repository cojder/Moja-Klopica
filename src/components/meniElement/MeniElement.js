import React, { useState } from "react";

import FoodPhoto from "../../assets/Food.png";
import { Arrow } from "../../assets/svg";

const MeinElement = () => {
  const [arrow, setArrow] = useState(false);

  return (
    <div className="meni-element">
      <div className="meni-element-img">
        <img
          className="meni-element-img-img"
          src={FoodPhoto}
          alt="slika-jela"
        />
      </div>

      <div className="meni-element-name">
        <div className="meni-element-name-name">Naziv jela</div>
        <div
          className={
            arrow ? "meni-element-name-arrow" : "meni-element-name-arrow-rotate"
          }
          onClick={() => setArrow((prevState) => !prevState)}
        >
          <Arrow />
        </div>
      </div>
      {arrow && (
        <div className="meni-element-info">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros
        </div>
      )}

      <div className="meni-element-meni">
        <div className="meni-element-meni-meni">MENI 1 - </div>
        <div className="meni-element-meni-price"> CENA </div>
      </div>
    </div>
  );
};

export default MeinElement;
