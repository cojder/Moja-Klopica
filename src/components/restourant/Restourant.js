import React from "react";

import { Phone, Location } from "../../assets/svg";
import Map from "../../assets/Map.png";

const Restourant = () => {
  return (
    <div className="restourant">
      <div className="restourant-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi elit,
        commodo nec ante id, ornare efficitur dui. Nulla in quam sed ex aliquam
        feugiat. In varius risus est, sed placerat tortor mollis a. Donec nec
        aliquet ante. Duis dictum, enim vel feugiat ultrices, sapien massa
        lobortis erat, non mollis libero nisl quis quam. Nunc tristique eget
        metus a dictum. Donec tincidunt tincidunt tellus vel sodales. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed sapien urna, suscipit nec viverra at, congue at quam.
        Donec sodales ante a metus consequat, vitae placerat mi maximus.
        Pellentesque elementum nibh vitae lectus facilisis, in ornare turpis
        suscipit.
      </div>
      <div className="restourant-right">
        <div className="restourant-right-name">Restoran Top Food 021</div>
        <div className="restourant-right-location">
          <Location /> Svetozara Miletića 26, 21000 Novi Sad
        </div>
        <div className="restourant-right-phone">
          <Phone /> 0644226471
        </div>
        <div className="restourant-right-img">
          <img src={Map} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Restourant;
