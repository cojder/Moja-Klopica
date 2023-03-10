import React, { useState, useContext } from "react";

import { Arrow } from "../../assets/svg";
import Food from "../../assets/Food.png";
import CartELement from "../cartElement/CartElement";
import { CartContext } from "../offer/Offer";

const MeinElement = ({ item }) => {
  const [arrow, setArrow] = useState(false);
  const [selectItem, setSelectItem] = useState(null);

  const MyCartValue = useContext(CartContext);

  // console.log(item, "item iz propa u meni elemenntu");

  const addToCart = (item) => {
    MyCartValue.addItemToCart(item);

    setSelectItem(item);
    console.log(selectItem, "selected item");
  };

  return (
    <div className="meni-element">
      <div className="meni-element-img">
        <img className="meni-element-img-img" src={item.img} alt={Food} />
      </div>
      <div className="meni-element-name">
        <div className="meni-element-name-name">{item.title}</div>
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
        <div className="meni-element-meni-meni">{item.type.name} - </div>
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
      {/* {selectItem && <CartELement item={selectItem} />} */}
    </div>
  );
};

export default MeinElement;
