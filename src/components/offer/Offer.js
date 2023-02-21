import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Meni from "../meni/Meni";
import { DownnArrow } from "../../assets/svg";
import Cart from "../cart/Cart";
import { ABOUT_RESTOURANT } from "../../constants/paths";

const Offer = ({ colorRed }) => {
  const ref = useRef(null);

  const scrollDown = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <>
      <div className={colorRed ? "offer-red" : "offer"}>
        <div className="offer-offer">
          {!colorRed && (
            <div onClick={() => scrollDown()} className="offer-offer-ponuda">
              Ponuda <DownnArrow />
            </div>
          )}
        </div>
        <div
          className={colorRed ? "offer-red-header " : "offer-header"}
          ref={ref}
        >
          <div
            className={
              colorRed ? "offer-red-header-name " : "offer-header-name"
            }
          >
            TOP FOOD 021
          </div>
          <Link
            to={`${ABOUT_RESTOURANT}/:id`}
            className={
              colorRed ? "offer-red-header-info " : "offer-header-info"
            }
          >
            opste informacije
          </Link>
          <div
            className={
              colorRed ? "offer-red-header-dnevni " : "offer-header-dnevni"
            }
          >
            dnevni meni {date}
          </div>
        </div>
      </div>

      {colorRed ? (
        <div className="reserve">
          <div className="reserve-left">
            <Meni colorRed />
          </div>
          <div className="reserve-right">
            <Cart />
          </div>
        </div>
      ) : (
        <Meni />
      )}
    </>
  );
};

export default Offer;
