import React, { useState } from "react";

import Navigationbar from "../components/navigationbar/Navigationbar";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";

const HomePage = () => {
  const [sideBar, setSidebar] = useState(false);

  return (
    <>
      <Navigationbar showSidbar={() => setSidebar(true)} />
      <Footer />
      {sideBar && <Sidebar onBackdropClick={() => setSidebar(false)} />}
    </>
  );
};

export default HomePage;
