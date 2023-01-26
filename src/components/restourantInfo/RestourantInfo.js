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
            <ul className="container-description-restourant">
              <li>RESTORANI</li>
              <li> &#x2022; Domaca kuhinja</li>
              <li>&#x2022; 4.2 zvezdica 60 ocena</li>
              <li>&#x2022; Besplatna dostava</li>
            </ul>
          </div>
          <div className="container-description-time">
            <ul className="container-description-time">
              <li className="container-description-time-green">
                <Icon icon="mdi:clock-time-four-outline" />
                Otvoreno sad
              </li>
              <li> &#x2022; Zatvara se u 23:00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestourantInfo;
