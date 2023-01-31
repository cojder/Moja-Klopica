import React, { useLayoutEffect } from "react";

import RestourantCard from "../restourantCard/RestourantCard";
import { ArrowLeft, ArrowRight } from "../../assets/svg";

const Slider = () => {
  let slider;
  useLayoutEffect(() => {
    slider = document.getElementById("slider-element");
  }, []);

  function sideScroll(direction, step) {
    if (direction === "left") {
      slider.scrollLeft -= step;
    } else {
      slider.scrollLeft += step;
    }
  }

  return (
    <div id="slider" className="slider">
      <button
        id="buttonLeft"
        className="slider-arrow-left"
        onClick={() => {
          sideScroll("left", 200);
        }}
      >
        <ArrowLeft />
      </button>
      <div id="slider-element" className={"slider-element"}>
        <div className="slider-element-1">
          <RestourantCard />
        </div>
        <div className="slider-element-1">
          <RestourantCard />
        </div>
        <div className="slider-element-1">
          <RestourantCard />
        </div>
        <div className="slider-element-1">
          <RestourantCard />
        </div>
      </div>
      <button
        id="buttonRight"
        onClick={() => {
          sideScroll("right", 200);
        }}
        className=" slider-arrow-right"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Slider;
