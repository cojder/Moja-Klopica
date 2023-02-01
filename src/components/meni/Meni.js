import React, { useState } from "react";

import Calculator from "../calculator/Calculator";
import MeinElement from "../meniElement/MeniElement";

const Meni = () => {
  const [day, setDay] = useState("ponedeljak");

  return (
    <div className="meni">
      <div className="meni-left">
        <div className="meni-left-sidebar">
          <div className="meni-left-sidebar-list">
            <button
              className="meni-left-sidebar-list-button"
              onClick={() => setDay("ponedeljak")}
            >
              PONEDELJEAK
            </button>
            <button
              className="meni-left-sidebar-list-button"
              onClick={() => setDay("utorak")}
            >
              utorak
            </button>
            <button
              className="meni-left-sidebar-list-button"
              onClick={() => setDay("sreda")}
            >
              sreda
            </button>
            <button
              className="meni-left-sidebar-list-button"
              onClick={() => setDay("cetvrtak")}
            >
              cetvrtak
            </button>
            <button
              className="meni-left-sidebar-list-button"
              onClick={() => setDay("petak")}
            >
              petak
            </button>
          </div>
        </div>
        <div className="meni-left-element">
          {day === "ponedeljak" && <MeinElement /> && <MeinElement />}
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
