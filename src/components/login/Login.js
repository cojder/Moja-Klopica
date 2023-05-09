import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "react-query";

import { Email, Lock, Arrow } from "../../assets/svg";
import { UserService } from "../../apis/User";
import InputField from "../input/Input";

const mail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Login = ({ setShowModal, closeModal }) => {
  const { register, handleSubmit } = useForm();
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();
  const queryClient = useQueryClient();

  const validateEmail = (email) =>
    mail.test(email) ? "" : "invalid email form";

  const validatePassword = (password) => (!password ? "invalid password" : "");

  const login = useMutation({
    mutationFn: (data) => {
      return UserService.loginUser(data);
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData("userLogin", variables.email);
      closeModal();
    },
  });

  const submit = (data) => {
    const validationError =
      validateEmail(data.email) || validatePassword(data.password);

    setErrorEmail(validateEmail(data.email));
    setErrorPassword(validatePassword(data.password));

    !validationError && login.mutateAsync(data);
  };

  return (
    <div className="login" onClick={() => closeModal()}>
      <form
        onSubmit={handleSubmit(submit)}
        onClick={(e) => e.stopPropagation()}
        className="login-container"
      >
        <div onClick={() => closeModal()} className="login-close">
          <Arrow />
        </div>
        <div className="login-container-header">Ulogujte se</div>
        <div className="login-container-input">
          <InputField
            inputIcon={<Email />}
            divClassName={
              errorEmail && login.error
                ? "login-container-input-field-error"
                : "login-container-input-field"
            }
            value="email"
            placeholder="Email"
            type="email"
            className={"login-container-input-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            errorMessage={errorEmail}
            errorStyle={""}
            id={"loginEmail"}
          />

          <InputField
            inputIcon={<Lock />}
            divClassName={
              errorPassword && login.error
                ? "login-container-input-field-error"
                : "login-container-input-field"
            }
            value="password"
            placeholder="šifra"
            type="password"
            className={"login-container-input-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            errorMessage={errorPassword}
            errorStyle={""}
            id={"loginPassword"}
          />

          <div
            onClick={() => setShowModal("ForgetPassword")}
            className="login-container-forget-password"
          >
            Zaboravili ste šifru?
          </div>
          {login.error && (
            <div className="">{login.error.response.data.message}</div>
          )}
        </div>
        <button
          className="login-container-button"
          onClick={handleSubmit(submit)}
        >
          Uloguj se
        </button>
      </form>
    </div>
  );
};

export default Login;
