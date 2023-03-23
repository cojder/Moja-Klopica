import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { UserService } from "../../apis/User";

import Profile from "../../assets/Profile.png";
import {
  ArrowWhite,
  MyReservationIcon,
  ProfileChange,
  LogOutIcon,
} from "../../assets/svg";
import { MYRESERVATION, PROFILE } from "../../constants/paths";

const UserNavigation = ({ colorRed }) => {
  const [userInfo, setUserInfo] = useState(false);
  const queryClient = useQueryClient();

  const { data: logedUser } = useQuery("user", () =>
    UserService.getLogedUser(localStorage.getItem("token"))
  );

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
          <Link to={`${MYRESERVATION}/id`} className="user-info-element">
            <MyReservationIcon />
            Moje rezervacije
          </Link>
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
