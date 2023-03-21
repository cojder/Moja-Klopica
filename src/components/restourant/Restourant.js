import React from "react";
import { useQuery } from "react-query";

import { Phone, Location, Clock } from "../../assets/svg";
import Map from "../../assets/Map.png";
import { RestourantService } from "../../apis/RestourantsAPI";

const Restourant = () => {
  const {
    data: restourant,
    isError,
    isLoading,
    error,
  } = useQuery("restourants", () => RestourantService.getRestourantWithId(1));

  if (isError) return <h3>{error}</h3>;

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div key={restourant.data.id} className="restourant">
      <div className="restourant-left">
        <div className="restourant-left-name">{restourant.data.name}</div>
        <div className="restourant-left-time">
          <Clock />
          {/* {restourant.data.workHours[1].openingTime} */}
          {/* {restourant.data.workHours[1].closingTime} */}
          {restourant.data.workHours.map((workHours) => workHours.openingTime)}
          {restourant.data.workHours.map((workHours) => workHours.closingTime)}
        </div>
        <div className="restourant-left-location">
          <Location /> {restourant.data.address}
        </div>
        <div className="restourant-left-phone">
          <Phone /> {restourant.data.phoneNumber}
        </div>
        <div className="restourant-left-text">
          {" "}
          {restourant.data.description}
        </div>
      </div>
      <div className="restourant-right">
        <div className="restourant-right-img">
          <img className="restourant-right-img-img" src={Map} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Restourant;
