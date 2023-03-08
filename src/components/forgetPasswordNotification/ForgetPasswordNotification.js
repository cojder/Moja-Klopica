import React from "react";
import { UserService } from "../../apis/User";
import { useMutation, useQueryClient } from "react-query";

import { Close } from "../../assets/svg";
const ForgetPassword = ({ closeModal }) => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueriesData("userForgetPassword");

  const forgetPasswordMutation = useMutation("userForgetPassword", (data) => {
    UserService.forgetPassword(data);
  });

  const sendAgein = (user) => {
    forgetPasswordMutation.mutateAsync(user);
  };

  return (
    <div className="forget-password-notification">
      <div className="forget-password-notification-container">
        <div
          onClick={closeModal}
          className="forget-password-notification-container-close"
        >
          <Close />
        </div>
        <div className="forget-password-notification-container-header">
          <div className="forget-password-notification-container-header-name">
            PROVERITE SVOJ EMAIL
          </div>
          <div className="forget-password-notification-container-header-description">
            Poslali smo Vam link za resetovanje sifre na {user?.[0]?.[1]}
          </div>
        </div>

        <button className="forget-password-notification-container-button">
          OTVORI EMAIL
        </button>
        <div className="forget-password-notification-container-bottom">
          Nije Vam stigao email?
          <div
            onClick={() => sendAgein(user?.[0]?.[1])}
            className="forget-password-notification-container-bottom-button"
          >
            Posalji ponovo
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
