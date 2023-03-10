import React, { useState } from "react";

import { Arrow } from "../../assets/svg";

const FAQ = ({ comments }) => {
  const [arrow, setArrow] = useState(false);

  return (
    <div className="faq">
      <div className="faq-body">
        <div className="faq-body-header">
          <div className="faq-body-header-name">{comments.name}</div>
          <div
            className={
              arrow
                ? "faq-body-header-name-arrow"
                : "faq-body-header-name-arrow-rotate"
            }
            onClick={() => setArrow((prevState) => !prevState)}
          >
            <Arrow />
          </div>
        </div>
        <div>
          {arrow && <div className="faq-body-text">{comments.description}</div>}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
