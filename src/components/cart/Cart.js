import React from "react";

import CartELement from "../cartElement/CartElement";
import { data } from "../../mockData/data";

const sum = () => {
  return <div>555</div>;
};

const dataItem = data[(data.id = 1)];

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-name">Korpa</div>
      <div className="cart-body">
        <CartELement item={dataItem} />
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
