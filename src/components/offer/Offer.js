import React, { useRef, createContext, useState } from "react";
import { Link } from "react-router-dom";

import Meni from "../meni/Meni";
import { DownnArrow } from "../../assets/svg";
import Cart from "../cart/Cart";
import { ABOUT_RESTOURANT } from "../../constants/paths";
import { useQuery } from "react-query";
import { RestourantService } from "../../apis/RestourantsAPI";

export const CartContext = createContext(null);

const date = new Date();

const Offer = ({ colorRed }) => {
  const ref = useRef(null);
  const [cartItems, setCartItems] = useState([]);
  const [today, setToday] = useState(date);

  const addItemToCart = (item, quantity, date, mealId) => {
    const itemExist = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemExist !== -1) {
      const updateCartItems = [...cartItems];
      updateCartItems[itemExist].quantity += quantity;
      setCartItems(updateCartItems);
    } else {
      const newItem = { ...item, quantity, date, mealId };
      setCartItems([...cartItems, newItem]);
    }
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    const itemExist = cartItems.findIndex((cartItem) => cartItem.id === itemId);

    if (itemExist !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[itemExist].quantity + newQuantity < 1) {
        updatedCartItems[itemExist].quantity = 1;
        return;
      }
      updatedCartItems[itemExist].quantity += newQuantity;
      setCartItems(updatedCartItems);
    }
  };

  const removeItemFrommCart = (itemId) => {
    const updateCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updateCartItems);
  };

  const resetCart = () => {
    setCartItems([]);
  };

  const { data: weekMeni } = useQuery("meniWeek", () =>
    RestourantService.getWeekMeni(5)
  );

  ////////////////////////////////////// svi restiorani dobijas zabranu moras bit Owner ili admin
  // const { data: allRestourants } = useQuery("ALLRESTOURANTS", () =>
  //   RestourantService.getAllRestournat(localStorage.getItem("token"))
  // );

  const scrollDown = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cartItems,
          addItemToCart,
          removeItemFrommCart,
          updateItemQuantity,
          resetCart,
          weekMeni,
        }}
      >
        <div>
          <div className={colorRed ? "offer-red" : "offer"}>
            <div className="offer-offer">
              {!colorRed && (
                <div onClick={scrollDown} className="offer-offer-ponuda">
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
                dnevni meni {today.toLocaleDateString()}
              </div>
            </div>
          </div>
          {colorRed ? (
            <div className="reserve">
              <div className="reserve-left">
                <Meni today={today} setToday={setToday} colorRed />
              </div>
              <div className="reserve-right ">
                <Cart today={today} />
              </div>
            </div>
          ) : (
            <Meni today={today} setToday={setToday} />
          )}
        </div>
        {colorRed && (
          <div className="mobile-cart">
            <Cart today={today} />
          </div>
        )}
      </CartContext.Provider>
    </>
  );
};

export default Offer;
