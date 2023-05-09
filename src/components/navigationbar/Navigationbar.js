import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, QueryClient } from "react-query";

import logo from "../../assets/Logo.png";
import { RESERVE, ABOUT_US } from "../../constants/paths";
import UserNavigation from "../userNavigation/UserNavigation";
import Sidebar from "../sidebar/Sidebar";

const Navigationbar = ({ colorRed }) => {
  const { data: user } = useQuery("userLogin");
  const [sidebar, setSidebar] = useState(false);

  // const queryClient = QueryClient();

  // const user = queryClient.getQueryData("userLogin");

  return (
    <div className={colorRed ? "first-red" : "first"}>
      <div className="menue" onClick={() => setSidebar(true)}>
        <div
          className={colorRed ? "menue-style menue-red" : "menue-style"}
        ></div>
      </div>
      {sidebar && <Sidebar onBackdropClick={() => setSidebar(false)} />}
      <div className="navigationbar">
        <div className="navigationbar-left">
          <img className="navigationbar-left-logo" src={logo} alt="logo" />
        </div>
        <div className="navigationbar-right">
          <Link
            to="/"
            className={
              colorRed
                ? window.location.pathname === "/"
                  ? "navigationbar-right-login-button-red-active"
                  : "navigationbar-right-login-button-red"
                : window.location.pathname === "/"
                ? "navigationbar-right-login-button-active"
                : "navigationbar-right-login-button"
            }
          >
            pocetna
          </Link>
          <Link
            to={`${RESERVE}/:id`}
            className={
              colorRed
                ? window.location.pathname === `${RESERVE}/:id`
                  ? "navigationbar-right-login-button-red-active"
                  : "navigationbar-right-login-button-red"
                : window.location.pathname === `${RESERVE}/:id`
                ? "navigationbar-right-login-button-active"
                : "navigationbar-right-login-button"
            }
          >
            Rezervisi
          </Link>
          <Link
            to={ABOUT_US}
            className={
              colorRed
                ? window.location.pathname === `${ABOUT_US}`
                  ? "navigationbar-right-login-button-red-active"
                  : "navigationbar-right-login-button-red"
                : window.location.pathname === `${ABOUT_US}`
                ? "navigationbar-right-login-button-active"
                : "navigationbar-right-login-button"
            }
          >
            O nama
          </Link>
          {localStorage.getItem("token") && (
            <UserNavigation colorRed={colorRed} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
