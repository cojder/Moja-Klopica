import React, { useLayoutEffect } from "react";

import RestourantCard from "../restourantCard/RestourantCard";
import { ArrowLeft, ArrowRight } from "../../assets/svg";

const Slider = () => {
  const ref = React.createRef();
  let slider;
  useLayoutEffect(() => {
    slider = document.getElementById("slider-element");
  }, []);

  function sideScroll(direction, speed, distance, step) {
    var scrollAmount = 0;
    var sliderTimer = setInterval(() => {
      if (direction === "left") {
        slider.scrollLeft -= step;
      } else {
        slider.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(sliderTimer);
      }
    }, speed);
  }

  return (
    <div ref={ref} id="slider" className="slider">
      <button
        id="buttonLeft"
        className="slider-arrow-left"
        onClick={() => sideScroll("left", 50, 200, 20)}
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
        onClick={() => sideScroll("right", 50, 200, 20)}
        className=" slider-arrow-right"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Slider;
