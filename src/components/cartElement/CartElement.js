import React, { useContext, useState } from "react";

import { Bin } from "../../assets/svg";
import { CartContext } from "../offer/Offer";

const CartELement = () => {
  const [count, setCount] = useState(1);
  if (count < 0) {
    setCount(0);
  }

  const MyCartValue = useContext(CartContext);

  console.log(MyCartValue.cartItems, "MyCartValue.cart ele,enta");

  // console.log(item, " item iz carrt welemenetas");

  const removeFromCart = () => {
    console.log(item.id, "removed from cart");
  };

  const item = MyCartValue.cartItems;

  console.log(item, "item iz karta sto je dobio iz contexta");

  return (
    <>
      {MyCartValue.cartItems.map((item) => (
        <div className="cart-element">
          <div className="cart-element-container">
            <div className="cart-element-container-img">
              <img
                className="cart-element-container-img-img"
                src={item.img}
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
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
                <div>{count}</div>
                <button
                  className="cart-element-container-box-amount-button"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="cart-element-sum">
            <div
              onClick={() => removeFromCart(item.id)}
              className="cart-element-sum-bin"
            >
              <Bin />
            </div>
            <div className="cart-element-sum-sum">{count * item.price} RSD</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartELement;
