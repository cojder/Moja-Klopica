import React, { useState } from "react";

import Footer from "../components/footer/Footer";
import MoreInfoBodyPrivacy from "../components/moreInfoBody/MoreInfoPrivacyPolicy";
import MoreInfoHeader from "../components/moreInfoHeader/MoreInfoHeader";
import Navigationbar from "../components/navigationbar/Navigationbar";
import Sidebar from "../components/sidebar/Sidebar";

const PrivacyPolicyPage = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="more-info">
      <Navigationbar showSidbar={() => setSidebar(true)} />
      <MoreInfoHeader />
      <MoreInfoBodyPrivacy />
      <Footer />
      {sidebar && <Sidebar onBackdropClick={() => setSidebar(false)} />}
    </div>
  );
};

export default PrivacyPolicyPage;
