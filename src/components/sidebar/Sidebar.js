import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";

import {
  House2,
  Close,
  ProfileChange,
  LogOutIcon,
  ForkAndKnife,
  AboutUsIcon,
  MyReservationIcon,
} from "../../assets/svg";
import Profile from "../../assets/Profile.png";
import {
  MYRESERVATION,
  PROFILE,
  ABOUT_US,
  RESERVE,
} from "../../constants/paths";

const logedUser = "dok";

const Sidebar = ({ onBackdropClick }) => {
  const { data: user } = useQuery("userLogin");
  const queryClient = useQueryClient();
  const logoutUser = () => {
    localStorage.removeItem("token");
    onBackdropClick();
    queryClient.setQueriesData("userLogin", undefined);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-box">
        <div className="sidebar-box-top">
          {user && (
            <div className="sidebar-box-top-user">
              <div className="user-navigation-img">
                <img
                  className="user-navigation-img-img"
                  src={Profile}
                  alt="profilePhoto"
                />
              </div>
              Pera Peric
            </div>
          )}
          <div className="sidebar-box-top-close" onClick={onBackdropClick}>
            <Close colorRed />
          </div>
        </div>
        <div>
          <Link
            to={"/"}
            onClick={onBackdropClick}
            className="sidebar-box-element"
          >
            <House2 />
            Početna
          </Link>
          {user ? (
            <Link to={`${RESERVE}/:id`} className="sidebar-box-element">
              <ForkAndKnife /> Rezerviši
            </Link>
          ) : (
            <Link to={`${RESERVE}/:id`} className="sidebar-box-element">
              <ForkAndKnife /> Ponuda
            </Link>
          )}
          {user && (
            <Link to={`${MYRESERVATION}/id`} className="sidebar-box-element">
              <MyReservationIcon /> Moje rezervacije
            </Link>
          )}
          {user && (
            <Link
              to={`${PROFILE}/${logedUser?.id}`}
              className="sidebar-box-element"
            >
              <ProfileChange /> Izmeni profil
            </Link>
          )}
          <Link to={ABOUT_US} className="sidebar-box-element">
            <AboutUsIcon /> O nama
          </Link>
          {user && (
            <Link to={"/"} onClick={logoutUser} className="sidebar-box-element">
              <LogOutIcon /> Odjavi se
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
