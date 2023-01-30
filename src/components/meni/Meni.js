import React from "react";

import Calculator from "../calculator/Calculator";
import MeinElement from "../meniElement/MeniElement";

const Meni = () => {
  return (
    <div className="meni">
      <div className="meni-left">
        <div className="meni-left-sidebar">
          <ul className="meni-left-sidebar-list">
            <li onClick={() => console.log("ponedeljak")}>PONEDELJEAK</li>
            <li onClick={() => console.log("utorak")}>utorak</li>
            <li onClick={() => console.log("sreda")}>sreda</li>
            <li onClick={() => console.log("cetvrtak")}>cetvrtak</li>
            <li onClick={() => console.log("petak")}>petak</li>
          </ul>
        </div>
        <div className="meni-left-element">
          <MeinElement />
          <MeinElement />
          <MeinElement />
        </div>
      </div>
      <div className="meni-right">
        <Calculator />
      </div>
    </div>
  );
};

export default Meni;
