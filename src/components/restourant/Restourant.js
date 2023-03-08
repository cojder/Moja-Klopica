import React from "react";
import { useQuery } from "react-query";

import { Phone, Location, Clock } from "../../assets/svg";
import Map from "../../assets/Map.png";
import { RestourantService } from "../../apis/RestourantsAPI";

const Restourant = () => {
  const { data, isError, isLoading, error } = useQuery("restourant", () =>
    RestourantService.getAllRestournat()
  );

  if (isError) return <h3>{error}</h3>;

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      {data?.data?.map((restourant) => (
        <div key={restourant.id} className="restourant">
          <div className="restourant-left">
            <div className="restourant-left-name">{restourant.name}</div>
            <div className="restourant-left-time">
              <Clock />
              {restourant.workHours[1].openingTime}
              {restourant.workHours[1].closingTime}
              {restourant.workHours.map((workHours) => workHours.openingTime)}
              {restourant.workHours.map((workHours) => workHours.closingTime)}
            </div>
            <div className="restourant-left-location">
              <Location /> {restourant.address}
            </div>
            <div className="restourant-left-phone">
              <Phone /> {restourant.phoneNumber}
            </div>
            <div className="restourant-left-text">
              {" "}
              {restourant.description}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
              elit, commodo nec ante id, ornare efficitur dui. Nulla in quam sed
              ex aliquam feugiat. In varius risus est, sed placerat tortor
              mollis a. Donec nec aliquet ante. Duis dictum, enim vel feugiat
              ultrices, sapien massa lobortis erat, non mollis libero nisl quis
              quam. Nunc tristique eget metus a dictum. Donec tincidunt
              tincidunt tellus vel sodales. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Sed sapien
              urna, suscipit nec viverra at, congue at quam. Donec sodales ante
              a metus consequat, vitae placerat mi maximus. Pellentesque
              elementum nibh vitae lectus facilisis, in ornare turpis suscipit.
            </div>
          </div>
          <div className="restourant-right">
            <div className="restourant-right-img">
              <img className="restourant-right-img-img" src={Map} alt="map" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Restourant;
