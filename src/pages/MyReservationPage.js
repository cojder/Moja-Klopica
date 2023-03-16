import React from "react";

import Navigationbar from "../components/navigationbar/Navigationbar";
import Footer from "../components/footer/Footer";
import MyReservation from "../components/myReservation/MyReservation";

const MyReservationPage = () => {
  return (
    <div>
      <Navigationbar colorRed />
      <MyReservation />
      <Footer />
    </div>
  );
};

export default MyReservationPage;
