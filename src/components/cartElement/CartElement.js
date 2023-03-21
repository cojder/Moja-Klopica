import React, { useContext } from "react";

import { Bin } from "../../assets/svg";
import { CartContext } from "../offer/Offer";
import Food from "../../assets/Food.png";

const CartELement = ({ total }) => {
  const { cartItems, removeItemFrommCart, updateItemQuantity } =
    useContext(CartContext);

  return (
    <>
      {cartItems?.map((item) => (
        <div key={item.id} className="cart-element">
          <div className="cart-element-container">
            <div className="cart-element-container-img">
              <img
                className="cart-element-container-img-img"
                src={Food}
                alt="slika"
              />
            </div>
            <div className="cart-element-container-box">
              <div className="cart-element-container-box-name">
                {item?.title}
              </div>
              <div className="cart-element-container-box-amount">
                <button
                  className="cart-element-container-box-amount-button"
                  onClick={() => updateItemQuantity(item.id, -1)}
                >
                  -
                </button>
                <div>{item.quantity}</div>
                <button
                  className="cart-element-container-box-amount-button"
                  onClick={() => updateItemQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="cart-element-sum">
            <div
              onClick={() => removeItemFrommCart(item.id)}
              className="cart-element-sum-bin"
            >
              <Bin />
            </div>
            <div className="cart-element-sum-sum">
              {item.price * item.quantity} RSD
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartELement;
