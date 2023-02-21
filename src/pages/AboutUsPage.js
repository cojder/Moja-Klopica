import React, { useState } from "react";

import Footer from "../components/footer/Footer";
import MoreInfoHeader from "../components/moreInfoHeader/MoreInfoHeader";
import Navigationbar from "../components/navigationbar/Navigationbar";
import AboutUsNavBar from "../components/aboutUsNavBar/AboutUsNavBar";
import AboutUs from "../components/aboutUs/AboutUs";
import FAQ from "../components/faq/FAQ";
import Privacy from "../components/privacy/Privacy";
import Terms from "../components/terms/Terms";
import { data } from "../mockData/comments";

const FAQPage = () => {
  const [component, setComponent] = useState("about us");

  return (
    <div className="more-info">
      <Navigationbar />
      <MoreInfoHeader />
      <AboutUsNavBar component={component} setComponent={setComponent} />
      {component === "about us" && <AboutUs />}
      {component === "faq" &&
        data.map((comments) => <FAQ key={comments.id} comments={comments} />)}
      {component === "privacy" && <Privacy />}
      {component === "terms" && <Terms />}
      <Footer />
    </div>
  );
};
export default FAQPage;
