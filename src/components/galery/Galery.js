import React, { useLayoutEffect } from "react";

import GaleryCard from "../galeryCard/GaleryCard";
import { ArrowLeft, ArrowRight } from "../../assets/svg";

const Galery = () => {
  let galery;
  useLayoutEffect(() => {
    galery = document.getElementById("galery-element");
  }, []);

  function sideScroll(direction, speed, distance, step) {
    var scrollAmount = 0;
    var galeryTimer = setInterval(() => {
      if (direction === "left") {
        galery.scrollLeft -= step;
      } else {
        galery.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(galeryTimer);
      }
    }, speed);
  }

  return (
    <div className="galery">
      <button
        className=" galery-arrow-left"
        onClick={() => {
          sideScroll("left", 50, 200, 20);
        }}
      >
        <ArrowLeft />
      </button>
      <div id="galery-element" className={"galery-element"}>
        <div id="1" className="galery-element-1">
          <GaleryCard />
        </div>
        <div className="galery-element-1">
          <GaleryCard />
        </div>
        <div className="galery-element-1">
          <GaleryCard />
        </div>
        <div id="4" className="galery-element-1">
          <GaleryCard />
        </div>
      </div>
      <button
        className=" galery-arrow-right"
        onClick={() => {
          sideScroll("right", 50, 200, 20);
        }}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Galery;
