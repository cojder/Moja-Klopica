import React from "react";
import Footer from "../components/footer/Footer";
import MoreInfoHeader from "../components/moreInfoHeader/MoreInfoHeader";
import Navigationbar from "../components/navigationbar/Navigationbar";

const MoreInfoPage = () => {
  return (
    <div className="more-info">
      <Navigationbar />
      <MoreInfoHeader />

      <Footer />
    </div>
  );
};

export default MoreInfoPage;
