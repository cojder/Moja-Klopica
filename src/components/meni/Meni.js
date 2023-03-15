import React from "react";

import MeinElement from "../meniElement/MeniElement";

const Meni = ({ colorRed, item }) => {
  return (
    <div className="meni-box">
      <div className={colorRed ? "meniNavBar-red" : "meniNavBar"}>
        <button className="meniNavBar-element">pon</button>
        <button className="meniNavBar-element">uto</button>
        <button className="meniNavBar-element">sre</button>
        <button className="meniNavBar-element">cet</button>
        <button className="meniNavBar-element">pet</button>
        <button className="meniNavBar-element">sub</button>
      </div>
      <div className={colorRed ? "meni-red" : "meni"}>
        {item.map((item) => (
          <MeinElement key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Meni;
