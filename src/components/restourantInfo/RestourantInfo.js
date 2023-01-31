import React from "react";
import { Icon } from "@iconify/react";

import BackGroundTop from "../../assets/BackGroundTop.png";
import TopFood from "../../assets/TopFood.png";
import Logo2 from "../../assets/Logo2.png";

const RestourantInfo = () => {
  return (
    <div className="restourant-info">
      <img className="restourant-info-img" src={BackGroundTop} alt="slika" />
      <div className="container">
        <div className="container-img">
          <img className="container-img-img" src={TopFood} alt="slika" />
        </div>
        <div className="container-logo">
          <img src={Logo2} />
        </div>
        <div className="container-description">
          <div className="container-description-title">
            Restoran Top FOOD 021
          </div>
          <div className="container-description-restourant">
            <div className="container-description-restourant">
              <div>RESTORANI</div>
              <div> &#x2022; Domaca kuhinja</div>
              <div>&#x2022; 4.2 zvezdica 60 ocena</div>
              <div>&#x2022; Besplatna dostava</div>
            </div>
          </div>
          <div className="container-description-time">
            <div className="container-description-time">
              <div className="container-description-time-text">
                <Icon icon="mdi:clock-time-four-outline" />
                <div className="container-description-time-text-green">
                  Otvoreno sad
                </div>
              </div>
              <div> &#x2022; Zatvara se u 23:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestourantInfo;
