import React, { useState, useContext } from "react";

import { Arrow } from "../../assets/svg";
import { CartContext } from "../offer/Offer";
import Food from "../../assets/Food.png";

const MeinElement = ({ date, items }) => {
  const [arrow, setArrow] = useState(false);
  const [newItemQuantity, setNewItemQuantity] = useState(1);

  const { addItemToCart } = useContext(CartContext);

  const decrease = () => {
    newItemQuantity <= 1
      ? setNewItemQuantity(1)
      : setNewItemQuantity(newItemQuantity - 1);
  };

  return (
    <div key={items?.id} className="meni-element">
      <div className="meni-element-img">
        <img
          className="meni-element-img-img"
          src={items?.image}
          alt={"slika"}
        />
      </div>
      <div className="meni-element-name">
        <div className="meni-element-name-name">{items?.title}</div>
        <div
          className={
            arrow ? "meni-element-name-arrow" : "meni-element-name-arrow-rotate"
          }
          onClick={() => setArrow(!arrow)}
        >
          <Arrow />
        </div>
      </div>
      {arrow && <div className="meni-element-info">{items?.description}</div>}
      <div className="meni-element-meni">
        <div className="meni-element-meni-meni">{items?.type?.name}- </div>
        <div className="meni-element-meni-price"> {items?.price} </div>
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
              addItemToCart(items, newItemQuantity, date, items.id);
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
