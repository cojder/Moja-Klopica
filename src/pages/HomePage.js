import React, { useState } from "react";

import Navigationbar from "../components/navigationbar/Navigationbar";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";

const HomePage = () => {
  const [sideBar, setSidebar] = useState(false);

  return (
    <div className="homepage">
      <Navigationbar showSidbar={() => setSidebar(true)} />
      <Header />
      <Slider />
      <Footer />
      {sideBar && <Sidebar onBackdropClick={() => setSidebar(false)} />}
    </div>
  );
};

export default HomePage;
