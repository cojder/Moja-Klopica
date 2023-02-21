import React from "react";

import Navigationbar from "../components/navigationbar/Navigationbar";
import Footer from "../components/footer/Footer";
import Offer from "../components/offer/Offer";

const RestourantMeniPage = () => {
  return (
    <div className="about-restourant">
      <Navigationbar colorRed />
      <Offer colorRed />
      <Footer />
    </div>
  );
};

export default RestourantMeniPage;
