import React from "react";

import CartELement from "../cartElement/CartElement";

const sum = () => {
  return <div>555</div>;
};

const Cart = ({ item }) => {
  return (
    <div className="cart">
      <div className="cart-name">Korpa</div>
      <div className="cart-body">
        <CartELement item={item.meals[1]} />
        {/* {data.map((item) => (
          <CartELement key={item.id} item={item} />
        ))} */}
      </div>
      <div className="cart-sum">
        <div>Ukupno:</div>
        <div className="cart-sum-price">{sum()}RSD</div>
      </div>
      <button className="cart-button">Potvrdi rezervaciju</button>
    </div>
  );
};

export default Cart;
