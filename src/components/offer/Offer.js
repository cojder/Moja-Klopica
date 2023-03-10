import React, { useRef, createContext, useState } from "react";
import { Link } from "react-router-dom";

import Meni from "../meni/Meni";
import { DownnArrow } from "../../assets/svg";
import Cart from "../cart/Cart";
import { ABOUT_RESTOURANT } from "../../constants/paths";
import { useQuery } from "react-query";
import { RestourantService } from "../../apis/RestourantsAPI";

export const CartContext = createContext(null);

const Offer = ({ colorRed }) => {
  const ref = useRef(null);
  /////////////////CONTEXT/////////////////////////////////
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFrommCart = (id) => {
    const updateCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updateCartItems);
  };
  //////////////////////////////////////////////////////

  const { data: weekMeni } = useQuery("meniWeek", () =>
    RestourantService.getWeekMeni(1)
  );
  // console.log(weekMeni, "from  offer");

  const scrollDown = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems,
          addItemToCart,
          removeItemFrommCart,
        }}
      >
        {weekMeni?.data.map((item) => (
          <div>
            <div className={colorRed ? "offer-red" : "offer"}>
              <div className="offer-offer">
                {!colorRed && (
                  <div
                    onClick={() => scrollDown()}
                    className="offer-offer-ponuda"
                  >
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
                    colorRed
                      ? "offer-red-header-dnevni "
                      : "offer-header-dnevni"
                  }
                >
                  dnevni meni {item.date}
                </div>
              </div>
            </div>
            {colorRed ? (
              <div className="reserve">
                <div className="reserve-left">
                  <Meni item={item} colorRed />
                </div>
                <div className="reserve-right">
                  <Cart item={item} />
                </div>
              </div>
            ) : (
              <Meni item={item} />
            )}
          </div>
        ))}
      </CartContext.Provider>
    </>
  );
};

export default Offer;
