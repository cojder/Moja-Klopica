import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import ReseveElement from "../reservElement/ReservElement";
import { Orderservice } from "../../apis/OrderAPI";

const date = new Date();

const MyReservation = () => {
  const [meals, setMeals] = useState([]);
  const [today, setToday] = useState(date);
  const { data: order, reset } = useQuery({
    queryKey: "userOrder",
    queryFn: () =>
      Orderservice.getUserOrder(localStorage.getItem("token"), true),
    retry: false,
  });
  // const [mealsOrder, setMealsOrder] = useState(order);

  const reservationForToday = () => {
    const meals = order?.data?.filter(
      (item) => item.date.slice(0, 8) === date.toLocaleDateString()
    );
    setMeals(meals);
  };

  const reservationForDayOfWeek = (dayOfWeek) => {
    const meals = order?.data.filter(
      (item) => new Date(item.date).getDay() === dayOfWeek
    );
    setMeals(meals);

    let daysToAdd = dayOfWeek - today.getDay();
    const nextDate = new Date(today.getTime());
    nextDate.setDate(today.getDate() + daysToAdd);

    order?.date === undefined
      ? setToday(new Date(nextDate))
      : setToday(new Date(order?.date));
  };

  const removeMealById = (id) => {
    const meals = order?.data?.filter((item) => item?.id !== id);
    setMeals(meals);
    reset();
  };

  useEffect(() => {
    reservationForToday();
  }, [order]);

  return (
    <div className="my-reservation">
      <div className="my-reservation-header">Moje rezervacije</div>
      <div className="my-reservation-message">
        Rezervacije se mogu otkazati do 10h ujutru sledeceg dana
      </div>
      <div className="my-reservation-navbar">
        <button
          onClick={() => reservationForDayOfWeek(1)}
          className="my-reservation-navbar-element"
        >
          pon
        </button>
        <button
          onClick={() => reservationForDayOfWeek(2)}
          className="my-reservation-navbar-element"
        >
          uto
        </button>
        <button
          onClick={() => reservationForDayOfWeek(3)}
          className="my-reservation-navbar-element"
        >
          sre
        </button>
        <button
          onClick={() => reservationForDayOfWeek(4)}
          className="my-reservation-navbar-element"
        >
          čet
        </button>
        <button
          onClick={() => reservationForDayOfWeek(5)}
          className="my-reservation-navbar-element"
        >
          pet
        </button>
        <button
          onClick={() => reservationForDayOfWeek(6)}
          className="my-reservation-navbar-element"
        >
          sub
        </button>
      </div>
      <div className="my-reservation-date">{today.toLocaleDateString()}</div>
      {meals?.length ? (
        meals.map((meals) => (
          <ReseveElement
            removeMealById={removeMealById}
            key={meals.id}
            meals={meals}
          />
        ))
      ) : (
        <div className="my-reservation-empty">
          Nema rezervacija za ovaj datum
        </div>
      )}
    </div>
  );
};

export default MyReservation;
