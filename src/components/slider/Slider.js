import React, { useState } from "react";

import RestourantCard from "../restourantCard/RestourantCard";
import { ArrowLeft, ArrowRight } from "../../assets/svg";

const Slider = () => {
  const [next, setNext] = useState(false);
  const [priv, setPriv] = useState(false);

  return (
    <div className="slider">
      <div
        className=" slider-arrow-left"
        onClick={() => {
          setPriv(true);
          console.log(priv);
        }}
        href="#1"
      >
        <ArrowLeft />
      </div>
      <div className={!next ? "slider-element" : "slider-element-move"}>
        <div id="1" className="slider-element-1">
          <RestourantCard />
        </div>
        <div className="slider-element-1">
          <RestourantCard />
        </div>
        <div className="slider-element-1">
          <RestourantCard />
        </div>
        <div id="4" className="slider-element-1">
          <RestourantCard />
        </div>
      </div>
      <div
        className=" slider-arrow-right"
        href="#4"
        onClick={() => {
          setNext(true);
          console.log(next);
        }}
      >
        <ArrowRight />
      </div>
    </div>
  );
};

export default Slider;
