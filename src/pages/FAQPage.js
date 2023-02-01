import React, { useState } from "react";

import Footer from "../components/footer/Footer";
import MoreInfoBodyFAQ from "../components/moreInfoBody/MoreInfoBodyFAQ";
import MoreInfoHeader from "../components/moreInfoHeader/MoreInfoHeader";
import Navigationbar from "../components/navigationbar/Navigationbar";
import Sidebar from "../components/sidebar/Sidebar";

const FAQPage = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="more-info">
      <Navigationbar showSidbar={() => setSidebar(true)} />
      <MoreInfoHeader />
      <MoreInfoBodyFAQ />
      <Footer />
      {sidebar && <Sidebar onBackdropClick={() => setSidebar(false)} />}
    </div>
  );
};
export default FAQPage;
