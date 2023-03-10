import React, { useState } from "react";

import Navigationbar from "../components/navigationbar/Navigationbar";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
import Sidebar from "../components/sidebar/Sidebar";
import RestourantInfo from "../components/restourantInfo/RestourantInfo";
import RestourantNavBar from "../components/restourantNavBar/RestourantNavBar";
import Galery from "../components/galery/Galery";

const RestourantGaleryPage = () => {
  const [sideBar, setSidebar] = useState(false);

  return (
    <div className="about-restourant">
      <Navigationbar showSidbar={() => setSidebar(true)} />
      <RestourantInfo />
      <RestourantNavBar />
      <Galery />
      <Slider />
      <Footer />
      {sideBar && <Sidebar onBackdropClick={() => setSidebar(false)} />}
    </div>
  );
};

export default RestourantGaleryPage;
