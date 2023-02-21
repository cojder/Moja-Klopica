import React from "react";

const AboutUsNavBar = ({ setComponent, component }) => {
  return (
    <div className="aboutus-navbar">
      <button
        onClick={() => setComponent("about us")}
        className={
          component === "about us"
            ? "aboutus-navbar-element-red"
            : "aboutus-navbar-element"
        }
      >
        O nama
      </button>
      <button
        onClick={() => setComponent("faq")}
        className={
          component === "faq"
            ? "aboutus-navbar-element-red"
            : "aboutus-navbar-element"
        }
      >
        FAQ
      </button>
      <button
        onClick={() => setComponent("privacy")}
        className={
          component === "privacy"
            ? "aboutus-navbar-element-red"
            : "aboutus-navbar-element"
        }
      >
        Politika privatnosti
      </button>
      <button
        onClick={() => setComponent("terms")}
        className={
          component === "terms"
            ? "aboutus-navbar-element-red"
            : "aboutus-navbar-element"
        }
      >
        Uslovi koriscenja
      </button>
    </div>
  );
};

export default AboutUsNavBar;
