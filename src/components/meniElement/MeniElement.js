import React from "react";
import MeniItem from "../meniItem/MeniItem";

const MeinElement = () => {
  return (
    <div className="meni-element">
      <div className="meni-element-top">
        <div className="meni-element-top-name">Meni 1 -</div>
        <div className="meni-element-top-price">460 din</div>
      </div>
      <div className="meni-element-top">
        <div className="meni-element-top-name">Meni 1 + Čorba -</div>
        <div className="meni-element-top-price">530 din</div>
      </div>

      <div className="meni-element-bottom">
        <MeniItem />
      </div>
    </div>
  );
};

export default MeinElement;
