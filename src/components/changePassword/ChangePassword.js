import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import InputField from "../input/Input";
import { UserService } from "../../apis/User";
import { Lock } from "../../assets/svg";
import { MAX_PASS_LENGHT, MIN_PASS_LENGHT } from "../../constants/Constants";

const ChangePassword = ({ closeModal }) => {
  const { register, handleSubmit } = useForm();
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [responseError, setResponseError] = useState("");

  const changePasswordMutate = useMutation({
    mutationFn: (data) => {
      return UserService.updatePassword(data, localStorage.getItem("token"));
    },
    onSuccess: () => {
      closeModal();
    },
    onError: (e) => {
      setResponseError(e?.response?.data?.message);
    },
  });

  const confirmPassword = (newPassword, newPasswordConfirm) =>
    newPassword === newPasswordConfirm ? "" : "passewords must be same";

  const validatePassword = (newPassword) =>
    !newPassword ||
    newPassword.length < MIN_PASS_LENGHT ||
    newPassword.length > MAX_PASS_LENGHT
      ? "invalid password"
      : "";

  const submit = ({ oldPassword, newPassword, newPasswordConfirm }) => {
    const error =
      confirmPassword(newPassword, newPasswordConfirm) ||
      validatePassword(newPassword);

    setErrorPassword(validatePassword(newPassword));
    setErrorConfirmPassword(confirmPassword(newPassword, newPasswordConfirm));

    !error && changePasswordMutate.mutateAsync({ oldPassword, newPassword });
  };

  return (
    <div className="change-password" onClick={() => closeModal()}>
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="change-password-container"
      >
        <div className="change-password-container-header">Promeni šifru</div>
        <div className="change-password-container-input">
          {" "}
          <InputField
            inputIcon={<Lock />}
            divClassName={
              errorPassword
                ? "change-password-container-input-field-error"
                : "change-password-container-input-field"
            }
            value="oldPassword"
            placeholder="Stara šifra"
            type="password"
            className={"change-password-container-input-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            errorMessage={errorPassword}
            errorStyle={""}
            id={"changePasswordOld"}
          />
          <InputField
            inputIcon={<Lock />}
            divClassName={
              errorPassword || errorConfirmPassword
                ? "change-password-container-input-field-error"
                : "change-password-container-input-field"
            }
            value="newPassword"
            placeholder="Nova šifru"
            type="password"
            className={"change-password-container-input-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            errorMessage={errorPassword}
            errorStyle={""}
            id={"changePasswordNew"}
          />
          <InputField
            inputIcon={<Lock />}
            divClassName={
              errorPassword || errorConfirmPassword
                ? "change-password-container-input-field-error"
                : "change-password-container-input-field"
            }
            value="newPasswordConfirm"
            placeholder="Potvrdi novu šifru"
            type="password"
            className={"change-password-container-input-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            errorMessage={errorPassword}
            errorStyle={""}
            id={"changePasswordNewConfirm"}
          />
        </div>
        {responseError && <div> {responseError}</div>}
        <button
          className="change-password-container-button"
          onClick={handleSubmit(submit)}
        >
          Promeni šifru
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
