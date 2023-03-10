import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { UserService } from "../../apis/User";

import Profile from "../../assets/Profile.png";
import {
  ArrowWhite,
  MyReservation,
  ProfileChange,
  LogOutIcon,
} from "../../assets/svg";
import { PROFILE } from "../../constants/paths";

const UserNavigation = ({ colorRed }) => {
  const [userInfo, setUserInfo] = useState(false);
  const queryClient = useQueryClient();

  const { data: logedUser } = useQuery("user", UserService.getLogedUser);

  const logoutUser = () => {
    localStorage.removeItem("token");
    queryClient.setQueriesData("userLogin", undefined);
  };

  return (
    <div className="user">
      <div onClick={() => setUserInfo(!userInfo)} className="user-navigation">
        <div className="user-navigation-img">
          <img
            className="user-navigation-img"
            src={Profile}
            alt="profilePhoto"
          />
        </div>
        <div
          className={
            userInfo ? "user-navigation-arrow-rotate" : "user-navigation-arrow"
          }
        >
          <ArrowWhite />
        </div>
      </div>
      {userInfo && (
        <div className={colorRed ? "user-info-red" : "user-info"}>
          <button className="user-info-element">
            <MyReservation />
            Moje rezervacije
          </button>
          <Link
            to={`${PROFILE}/${logedUser?.id}`}
            className="user-info-element"
          >
            <ProfileChange />
            Izmena profila
          </Link>
          <Link to={"/"} onClick={logoutUser} className="user-info-element">
            <LogOutIcon />
            Odjavi se
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserNavigation;
