import React, { useState } from "react";

import Navigationbar from "../components/navigationbar/Navigationbar";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
import Sidebar from "../components/sidebar/Sidebar";
import RestourantInfo from "../components/restourantInfo/RestourantInfo";
import RestourantNavBar from "../components/restourantNavBar/RestourantNavBar";
import Restourant from "../components/restourant/Restourant";
import Meni from "../components/meni/Meni";
import Impressions from "../components/impressions/Impressions";
import Galery from "../components/galery/Galery";

const AboutRestourantPage = () => {
  const [showComponent, setShowComponent] = useState("aboutRestourant");
  const [sideBar, setSidebar] = useState(false);

  return (
    <div className="about-restourant">
      <Navigationbar showSidbar={() => setSidebar(true)} />
      <RestourantInfo />
      <RestourantNavBar setShowComponent={setShowComponent} />
      {showComponent === "aboutRestourant" && <Restourant />}
      {showComponent === "meni" && <Meni />}
      {showComponent === "impressions" && <Impressions />}
      {showComponent === "galery" && <Galery />}
      <Slider />
      <Footer />
      {sideBar && <Sidebar onBackdropClick={() => setSidebar(false)} />}
    </div>
  );
};

export default AboutRestourantPage;
