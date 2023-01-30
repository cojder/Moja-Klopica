import React from "react";

import GaleryCard from "../galeryCard/GaleryCard";
import { ArrowLeft, ArrowRight } from "../../assets/svg";

const Galery = () => {
  return (
    <div className="galery">
      <div
        className=" galery-arrow-left"
        onClick={() => {
          console.log("levo");
        }}
        href="#1"
      >
        <ArrowLeft />
      </div>
      <div className={"galery-element"}>
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
      <div
        className=" galery-arrow-right"
        href="#4"
        onClick={() => {
          console.log("desno");
        }}
      >
        <ArrowRight />
      </div>
    </div>
  );
};

export default Galery;
