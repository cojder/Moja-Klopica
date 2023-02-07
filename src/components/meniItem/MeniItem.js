import React from "react";
import Logo2 from "../../assets/Logo2.png";

const MeniItem = () => {
  return (
    <div className="meni-item">
      <div className="meni-item-img">
        <img alt="slika" className="meni-item-img-img" src={Logo2} />
      </div>
      <div className="meni-item-right">
        <div className="meni-item-right-name">ime jela</div>
        <div className="meni-item-right-bottom">
          <div className="meni-item-right-bottom-amount">5dl</div>
          <div className="meni-item-right-bottom-pieces">
            <button className="button-small">-</button>
            <div>kolicina</div>
            <button className="button-small">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeniItem;
