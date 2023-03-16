import React, { useContext, useState } from "react";
import { useMutation } from "react-query";

import { CartContext } from "../offer/Offer";
import CartELement from "../cartElement/CartElement";
import SuccesfulReservation from "../successfulReservation/SuccessfulReservation";
import { Orderservice } from "../../apis/OrderAPI";

const Cart = () => {
  const { cartItems, resetCart } = useContext(CartContext);
  const [succesfulReservedOrder, setsuccesfulReservedOrder] = useState(false);

  const ReserveMeal = useMutation({
    mutationFn: (data) => {
      return Orderservice.postOrder(data);
    },
    onSuccess: () => {
      setsuccesfulReservedOrder(true);
    },
    onError: (e) => {
      console.log("Error:", e);
    },
  });

  const submit = (data) => {
    ReserveMeal.mutateAsync(data);
  };

  const ItemsInCart = cartItems.map((items) => items);
  const total = ItemsInCart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <>
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
            <button
              onClick={() => {
                submit(cartItems);
                setsuccesfulReservedOrder(true);
                resetCart();
              }}
              className="cart-button"
            >
              Potvrdi rezervaciju
            </button>
          </>
        )}
      </div>
      {succesfulReservedOrder && (
        <SuccesfulReservation
          closeModal={() => {
            setsuccesfulReservedOrder(false);
          }}
        />
      )}
    </>
  );
};

export default Cart;
