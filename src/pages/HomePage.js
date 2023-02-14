import React, { useState } from "react";

import Navigationbar from "../components/navigationbar/Navigationbar";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Offer from "../components/offer/Offer";

const HomePage = () => {
  const [sideBar, setSidebar] = useState(false);

  return (
    <div className="homepage">
      <Navigationbar showSidbar={() => setSidebar(true)} />
      <Header />
      <Offer />
      <Footer />
      {sideBar && <Sidebar onBackdropClick={() => setSidebar(false)} />}
    </div>
  );
};

export default HomePage;
