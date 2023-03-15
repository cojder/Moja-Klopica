import React, { useState, useContext } from "react";

import { Arrow } from "../../assets/svg";
import { CartContext } from "../offer/Offer";
import Food from "../../assets/Food.png";

const MeinElement = ({ item }) => {
  const [arrow, setArrow] = useState(false);
  const [newItemQuantity, setNewItemQuantity] = useState(1);

  const { addItemToCart } = useContext(CartContext);

  const decrease = () => {
    newItemQuantity <= 1
      ? setNewItemQuantity(1)
      : setNewItemQuantity(newItemQuantity - 1);
  };

  return (
    <div key={item.id} className="meni-element">
      <div className="meni-element-img">
        <img className="meni-element-img-img" src={Food} alt={"slika"} />
      </div>
      <div className="meni-element-name">
        <div className="meni-element-name-name">{item.title}</div>
        <div
          className={
            arrow ? "meni-element-name-arrow" : "meni-element-name-arrow-rotate"
          }
          onClick={() => setArrow(!arrow)}
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
            <button onClick={decrease} className="meni-element-reserve-button">
              -
            </button>

            <div className="meni-element-reserve-count">{newItemQuantity}</div>
            <button
              onClick={() => setNewItemQuantity(newItemQuantity + 1)}
              className="meni-element-reserve-button"
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              addItemToCart(item, newItemQuantity);
              setNewItemQuantity(1);
            }}
            className="meni-element-button-reserve"
          >
            Rezervisi
          </button>
        </>
      )}
    </div>
  );
};

export default MeinElement;
