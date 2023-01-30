import React, { useState } from "react";

import FAQ from "../faq/FAQ";
import Privacy from "../privacy/Privacy";
import Terms from "../terms/Terms";

const MoreInfoBody = () => {
  const [showComponent, setShowComponent] = useState("faq");
  return (
    <div className="more-info-body">
      <div className="more-info-body-left">
        <div className="more-info-body-left-button">
          <button onClick={() => setShowComponent("faq")}>
            Često postavljana pitanja
          </button>
          <button onClick={() => setShowComponent("privacy")}>
            Obaveštenje o privatnosti
          </button>
          <button onClick={() => setShowComponent("terms")}>
            Uslovi korišćenja
          </button>
        </div>
      </div>
      <div className="more-info-body-right">
        {showComponent === "faq" && <FAQ />}
        {showComponent === "privacy" && <Privacy />}
        {showComponent === "terms" && <Terms />}
      </div>
    </div>
  );
};

export default MoreInfoBody;
