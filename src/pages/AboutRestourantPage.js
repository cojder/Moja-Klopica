import React, { useState } from "react";

import Navigationbar from "../components/navigationbar/Navigationbar";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
import Restourant from "../components/restourant/Restourant";
import Galery from "../components/galery/Galery";

const AboutRestourantPage = () => {
  const [sideBar, setSidebar] = useState(false);

  return (
    <div className="about-restourant">
      <Navigationbar colorRed showSidbar={() => setSidebar(true)} />
      <Restourant />
      <Galery />
      <Footer />
      {sideBar && <Sidebar onBackdropClick={() => setSidebar(false)} />}
    </div>
  );
};

export default AboutRestourantPage;
