import React, { useContext } from "react";

import { CartContext } from "../offer/Offer";
import CartELement from "../cartElement/CartElement";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const ItemsInCart = cartItems.map((items) => items);
  const total = ItemsInCart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <div className="cart">
      <div className="cart-name">Korpa</div>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          Vasa korpa je prazna, rezervisite neko jelo iz dnevnog menija{" "}
        </div>
      ) : (
        <>
          <div className="cart-body">
            <CartELement />
          </div>
          <div className="cart-sum">
            <div>Ukupno:</div>
            <div className="cart-sum-price">{total} RSD</div>
          </div>
          <button className="cart-button">Potvrdi rezervaciju</button>
        </>
      )}
    </div>
  );
};

export default Cart;
