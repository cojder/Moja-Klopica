import React from "react";

import Photo from "../../assets/AboutUsImg.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-left">
        <img src={Photo} alt="slika" className="about-us-left-img" />
      </div>
      <div className="about-us-right">
        <div className="about-us-right-header">Lorem impsum?</div>
        <div className="about-us-right-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
          elit, commodo nec ante id, ornare efficitur dui. Nullam mi elit,
          commodo nec ante id, ornare effiLorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam mi elit, commodo nec ante id,
          ornare efficitur dui.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
