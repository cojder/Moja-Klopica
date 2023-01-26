import React from "react";
import Calculator from "../calculator/Calculator";
import MeinElement from "../meniElement/MeniElement";

const Meni = () => {
  return (
    <div className="meni">
      <div className="meni-left">
        <div className="meni-left-sidebar">
          <ul className="meni-left-sidebar-list">
            <li>PONEDELJEAK</li>
            <li>utorak</li>
            <li>sreda</li>
            <li>cetvrtak</li>
            <li>petak</li>
          </ul>
        </div>
        <div className="meni-left-element">
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
