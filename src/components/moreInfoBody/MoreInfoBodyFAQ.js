import React from "react";
import { Link } from "react-router-dom";

import FAQ from "../faq/FAQ";
import {
  FREQUENTLY_ASKED_QUESTIONS,
  TERMS_OF_USAEGE,
  PRIVACY_POLICY,
} from "../../constants/paths";

const MoreInfoBodyFAQ = () => {
  return (
    <div className="more-info-body">
      <div className="more-info-body-left">
        <div className="more-info-body-left-button">
          <Link
            to={`${FREQUENTLY_ASKED_QUESTIONS}`}
            className="more-info-body-left-button-active"
          >
            Često postavljana pitanja
          </Link>
          <Link
            to={`${TERMS_OF_USAEGE}`}
            className="more-info-body-left-button"
          >
            Obaveštenje o privatnosti
          </Link>
          <Link to={`${PRIVACY_POLICY}`} className="more-info-body-left-button">
            Uslovi korišćenja
          </Link>
        </div>
      </div>
      <div className="more-info-body-right">
        <FAQ />
      </div>
    </div>
  );
};

export default MoreInfoBodyFAQ;
