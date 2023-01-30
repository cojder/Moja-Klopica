import React, { useState } from "react";

import Navigationbar from "../components/navigationbar/Navigationbar";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
import Sidebar from "../components/sidebar/Sidebar";
import RestourantInfo from "../components/restourantInfo/RestourantInfo";
import RestourantNavBar from "../components/restourantNavBar/RestourantNavBar";
import Impressions from "../components/impressions/Impressions";

const RestourantImpressionsPage = () => {
  const [sideBar, setSidebar] = useState(false);

  return (
    <div className="about-restourant">
      <Navigationbar showSidbar={() => setSidebar(true)} />
      <RestourantInfo />
      <RestourantNavBar />
      <Impressions />
      <Slider />
      <Footer />
      {sideBar && <Sidebar onBackdropClick={() => setSidebar(false)} />}
    </div>
  );
};

export default RestourantImpressionsPage;
