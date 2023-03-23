import React, { useContext, useState } from "react";
import { useMutation } from "react-query";

import { CartContext } from "../offer/Offer";
import CartELement from "../cartElement/CartElement";
import SuccesfulReservation from "../successfulReservation/SuccessfulReservation";
import { Orderservice } from "../../apis/OrderAPI";

const Cart = ({ today }) => {
  const { cartItems, resetCart } = useContext(CartContext);
  const [succesfulReservedOrder, setsuccesfulReservedOrder] = useState(false);

  const ReserveMeal = useMutation({
    mutationFn: (data) => {
      return Orderservice.postOrder(data, localStorage.getItem("token"));
    },
    onSuccess: () => {
      resetCart();
      setsuccesfulReservedOrder(true);
    },
    onError: (e) => {
      console.log("Error:", e);
    },
    retry: false,
  });

  const total = cartItems
    ?.map((items) => items)
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  const itemsToReserv = {
    date: today.toISOString(),
    price: total,
    restaurantId: 5,
    items: cartItems,
  };

  return (
    <>
      <div className="cart">
        <div className="cart-name">Korpa</div>
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            Vasa korpa je prazna, rezervisite neko jelo iz dnevnog menija
          </div>
        ) : (
          <>
            <div className="cart-body">
              <CartELement total={total} />
            </div>
            <div className="cart-sum">
              <div>Ukupno: </div>
              <div className="cart-sum-price">{total} RSD</div>
            </div>
            <div>{ReserveMeal?.error?.response?.data?.message}</div>
            <button
              onClick={() => ReserveMeal.mutateAsync(itemsToReserv)}
              className="cart-button"
            >
              Potvrdi rezervaciju
            </button>
          </>
        )}
      </div>
      {succesfulReservedOrder && (
        <SuccesfulReservation
          closeModal={() => setsuccesfulReservedOrder(false)}
        />
      )}
    </>
  );
};

export default Cart;
