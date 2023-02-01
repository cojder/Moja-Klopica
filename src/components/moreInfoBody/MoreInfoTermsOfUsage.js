import React from "react";
import { Link } from "react-router-dom";

import Terms from "../terms/Terms";
import {
  FREQUENTLY_ASKED_QUESTIONS,
  PRIVACY_POLICY,
  TERMS_OF_USAEGE,
} from "../../constants/paths";

const MoreInfoBodyTerms = () => {
  return (
    <div className="more-info-body">
      <div className="more-info-body-left">
        <div className="more-info-body-left-button">
          <Link
            to={FREQUENTLY_ASKED_QUESTIONS}
            className="more-info-body-left-button"
          >
            Često postavljana pitanja
          </Link>
          <Link
            to={TERMS_OF_USAEGE}
            className="more-info-body-left-button-active"
          >
            Obaveštenje o privatnosti
          </Link>
          <Link to={PRIVACY_POLICY} className="more-info-body-left-button">
            Uslovi korišćenja
          </Link>
        </div>
      </div>
      <div className="more-info-body-right">
        <Terms />
      </div>
    </div>
  );
};

export default MoreInfoBodyTerms;
