import React, { useState } from "react";
import { useQuery } from "react-query";

import { FAQService } from "../../apis/FAQAPI";
import { Arrow } from "../../assets/svg";

const FAQ = () => {
  const [arrow, setArrow] = useState(false);
  const { data } = useQuery("faq", FAQService.getAllFAQ);

  return (
    <div className="faq">
      {data?.data?.map((faq) => (
        <div key={faq?.id} className="faq-body">
          <div className="faq-body-header">
            <div className="faq-body-header-name">{faq?.question}</div>
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
            {arrow && <div className="faq-body-text">{faq?.answer}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
