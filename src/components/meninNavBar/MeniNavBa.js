import React from "react";

const MeniNavBar = ({ colorRed }) => {
  return (
    <div className={colorRed ? "meniNavBar-red" : "meniNavBar"}>
      <button className="meniNavBar-element">pon</button>
      <button className="meniNavBar-element">uto</button>
      <button className="meniNavBar-element">sre</button>
      <button className="meniNavBar-element">cet</button>
      <button className="meniNavBar-element">pet</button>
      <button className="meniNavBar-element">sub</button>
    </div>
  );
};

export default MeniNavBar;
