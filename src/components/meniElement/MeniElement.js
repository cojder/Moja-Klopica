import React, { useState } from "react";

import { Arrow } from "../../assets/svg";
import CartELement from "../cartElement/CartElement";

const MeinElement = ({ item }) => {
  const [arrow, setArrow] = useState(false);
  const [selectItem, setSelectItem] = useState(null);

  const addToCart = (item) => {
    setSelectItem(item);
    console.log(selectItem);
  };

  return (
    <div className="meni-element">
      <div className="meni-element-img">
        <img
          className="meni-element-img-img"
          src={item.img.Food}
          alt="slika-jela"
        />
      </div>
      <div className="meni-element-name">
        <div className="meni-element-name-name">{item.name}</div>
        <div
          className={
            arrow ? "meni-element-name-arrow" : "meni-element-name-arrow-rotate"
          }
          onClick={() => setArrow((prevState) => !prevState)}
        >
          <Arrow />
        </div>
      </div>
      {arrow && <div className="meni-element-info">{item.description}</div>}
      <div className="meni-element-meni">
        <div className="meni-element-meni-meni">{item.meni} - </div>
        <div className="meni-element-meni-price"> {item.price} </div>
      </div>
      {window.location.pathname !== "/" && (
        <>
          <div className="meni-element-reserve">
            <button className="meni-element-reserve-button">-</button>
            <div className="meni-element-reserve-count">1</div>
            <button className="meni-element-reserve-button">+</button>
          </div>
          <button
            onClick={() => addToCart(item)}
            className="meni-element-button-reserve"
          >
            Rezervisi
          </button>
        </>
      )}
      {selectItem && <CartELement item={selectItem} />}{" "}
      {/* trwba preko global steate da se penese u cart
       */}
    </div>
  );
};

export default MeinElement;
