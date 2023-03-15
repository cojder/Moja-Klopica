import React, { useRef, createContext, useState } from "react";
import { Link } from "react-router-dom";

import Meni from "../meni/Meni";
import { DownnArrow } from "../../assets/svg";
import Cart from "../cart/Cart";
import { ABOUT_RESTOURANT } from "../../constants/paths";
import { useQuery } from "react-query";
import { RestourantService } from "../../apis/RestourantsAPI";

import { data as item } from "../../mockData/data";

export const CartContext = createContext(null);

const Offer = ({ colorRed }) => {
  const ref = useRef(null);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item, quantity) => {
    const itemExist = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemExist !== -1) {
      const updateCartItems = [...cartItems];
      updateCartItems[itemExist].quantity += quantity;
      setCartItems(updateCartItems);
    } else {
      const newItem = { ...item, quantity };
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

  const { data: weekMeni } = useQuery("meniWeek", () =>
    RestourantService.getWeekMeni(4)
  );

  ////////////////////////////////////// svi restiorani
  // const { data: allRestourants } = useQuery("ALLRESTOURANTS", () =>
  //   RestourantService.getAllRestournat()
  // );
  // // console.log(allRestourants, "svi restorani");

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
          // sum,
        }}
      >
        {/* {weekMeni?.data?.map((item) => ( */}
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
        {/* ))} */}
      </CartContext.Provider>
    </>
  );
};

export default Offer;
