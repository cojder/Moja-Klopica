import React, { useState } from "react";

import Footer from "../components/footer/Footer";
import MoreInfoBodyTerms from "../components/moreInfoBody/MoreInfoTermsOfUsage";
import MoreInfoHeader from "../components/moreInfoHeader/MoreInfoHeader";
import Navigationbar from "../components/navigationbar/Navigationbar";
import Sidebar from "../components/sidebar/Sidebar";

const TermsOfUsagePaga = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="more-info">
      <Navigationbar showSidbar={() => setSidebar(true)} />
      <MoreInfoHeader />
      <MoreInfoBodyTerms />
      <Footer />
      {sidebar && <Sidebar onBackdropClick={() => setSidebar(false)} />}
    </div>
  );
};

export default TermsOfUsagePaga;
