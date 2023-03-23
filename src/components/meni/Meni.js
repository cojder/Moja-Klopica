import React, { useState, useContext, useEffect } from "react";

import MeinElement from "../meniElement/MeniElement";
import { CartContext } from "../offer/Offer";

const Meni = ({ colorRed, today, setToday }) => {
  const [item, setItem] = useState([]);
  const { weekMeni } = useContext(CartContext);

  const meniForToday = () => {
    const meni = weekMeni?.data?.find(
      (item) => item.date === today.toISOString().slice(0, 10)
    );
    setItem(meni);
  };

  const meniForDayOfWeek = (dayOfWeek) => {
    const meni = weekMeni.data.find(
      (item) => new Date(item.date).getDay() === dayOfWeek
    );
    setItem(meni);

    let daysToAdd = dayOfWeek - today.getDay();
    const nextDate = new Date(today.getTime());
    nextDate.setDate(today.getDate() + daysToAdd);

    meni?.date === undefined
      ? setToday(new Date(nextDate))
      : setToday(new Date(meni?.date));
  };

  useEffect(() => {
    meniForToday();
  }, [weekMeni]);

  return (
    <div className="meni-box">
      <div className={colorRed ? "meniNavBar-red" : "meniNavBar"}>
        <button
          id="1"
          onClick={() => meniForDayOfWeek(1)}
          className="meniNavBar-element"
        >
          pon
        </button>
        <button
          onClick={() => meniForDayOfWeek(2)}
          id="2"
          className="meniNavBar-element"
        >
          uto
        </button>
        <button
          onClick={() => meniForDayOfWeek(3)}
          id="3"
          className="meniNavBar-element"
        >
          sre
        </button>
        <button
          onClick={() => meniForDayOfWeek(4)}
          id="4"
          className="meniNavBar-element"
        >
          cet
        </button>
        <button
          onClick={() => meniForDayOfWeek(5)}
          id="5"
          className="meniNavBar-element"
        >
          pet
        </button>
        <button
          onClick={() => meniForDayOfWeek(6)}
          id="6"
          className="meniNavBar-element"
        >
          sub
        </button>
      </div>
      <div className={colorRed ? "meni-red" : "meni"}>
        {!item || item?.meals?.length === 0 ? (
          <div className="meni-empty">
            Dnevni meni za {today.toLocaleDateString()} jos uvek nije definisan
          </div>
        ) : (
          item?.meals?.map((items) => (
            <MeinElement date={item?.date} key={items.id} items={items} />
          ))
        )}
      </div>
    </div>
  );
};

export default Meni;
