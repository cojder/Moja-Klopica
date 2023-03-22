import React from "react";
import { useMutation } from "react-query";

import { Orderservice } from "../../apis/OrderAPI";

const ReseveElement = ({ meals }) => {
  const deleteMeal = useMutation((id) =>
    Orderservice.deleteOrder(localStorage.getItem("token"), id)
  );

  return (
    <div className="reserv-element">
      <div className="reserv-element-name">
        {meals?.restaurant?.restaurantName}
      </div>
      <div className="reserv-element-reservation-number">
        REzervacija BrojRezervacije
      </div>
      {meals?.items?.map((meal) => (
        <div key={meal.id} className="reserv-element-body">
          <div className="reserv-element-body-img">
            <img
              className="reserv-elemen-bodyt-img-img"
              src={meal?.img}
              alt="Slilka"
            />
          </div>
          <div className="reserv-element-body-box">
            <div className="reserv-element-body-box-name">{meal.mealName}</div>
            <div className="reserv-element-body-box-description">
              {meal.description}description nije dobijen u odgovoru sa bekendsa
            </div>
            <div className="reserv-element-body-box-quantity">
              {meal.quantity} porcija
            </div>
            <div className="reserv-element-body-box-bottom">
              <div className="reserv-element-body-box-bottom-price">
                {meals?.price} RSD
              </div>
              <button
                onClick={() => deleteMeal.mutateAsync(meals.id)}
                className="reserv-element-body-box-bottom-button"
              >
                otkaži rezervaciju
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReseveElement;
