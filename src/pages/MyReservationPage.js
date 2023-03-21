import React from "react";

import Navigationbar from "../components/navigationbar/Navigationbar";
import Footer from "../components/footer/Footer";
import MyReservation from "../components/myReservation/MyReservation";

const MyReservationPage = () => {
  return (
    <div className="myreservation-page">
      <Navigationbar colorRed />
      <MyReservation />
      <Footer />
    </div>
  );
};

export default MyReservationPage;
