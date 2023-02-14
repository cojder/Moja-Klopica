import React, { useRef } from "react";

import Meni from "../meni/Meni";
import { DownnArrow } from "../../assets/svg";
import MeniNavBar from "../meninNavBar/MeniNavBa";

const Offer = () => {
  const ref = useRef(null);
  const scrollDown = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="offer">
        <div className="offer-offer">
          <div onClick={() => scrollDown()} className="offer-offer-ponuda">
            Ponuda <DownnArrow />
          </div>
        </div>
        <div className="offer-header" ref={ref}>
          <div className="offer-header-name">TOP FOOD 021</div>
          <div className="offer-header-info">opste informacije</div>
          <div className="offer-header-dnevni">dnevni meni</div>
        </div>
      </div>

      <MeniNavBar />
      <Meni />
    </>
  );
};

export default Offer;
