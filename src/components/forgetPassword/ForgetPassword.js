import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "react-query";

import InputField from "../input/Input";
import { Email, Close } from "../../assets/svg";
import { UserService } from "../../apis/User";

const mail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const ForgetPassword = ({ setShowModal, closeModal }) => {
  const { register, handleSubmit } = useForm();
  const [errorEmail, setErrorEmail] = useState();
  const queryClient = useQueryClient();

  const forgetPasswordMutation = useMutation({
    mutationFn: (data) => {
      UserService.forgetPassword(data.email);
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData("userForgetPassword", variables.email);
      setShowModal("ForgetPasswordNotification");
    },
  });

  const validateEmail = (email) =>
    mail.test(email) ? "" : "invalid email form";

  const submit = (data) => {
    validateEmail(data.email);
    setErrorEmail(errorEmail);
    !errorEmail && forgetPasswordMutation.mutateAsync(data);
  };

  return (
    <div className="forget-password">
      <form
        onSubmit={handleSubmit(submit)}
        className="forget-password-container"
      >
        <div onClick={closeModal} className="forget-password-container-close">
          <Close />
        </div>
        <div className="forget-password-container-header">
          <div className="forget-password-container-header-name">
            ZABORAVILI STE ŠIFRU?
          </div>
          <div className="forget-password-container-header-description">
            Ne brinite, mi cemo Vam poslati insttrukcije za resetovanje
          </div>
        </div>

        <InputField
          inputIcon={<Email />}
          divClassName={
            errorEmail
              ? "forget-password-container-input-field-error"
              : "forget-password-container-input-field"
          }
          value="email"
          placeholder="Email"
          type="email"
          className={"forget-password-container-input-field-input"}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={submit}
          errorMessage={errorEmail}
          errorStyle={""}
          id={"frogetPassword"}
        />

        <button
          onClick={handleSubmit(submit)}
          className="forget-password-container-button"
        >
          RESETUJ ŠIFRU
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
