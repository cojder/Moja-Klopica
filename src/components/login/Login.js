import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Email, Lock } from "../../assets/svg";

import InputField from "../input/Input";

const mail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Login = ({ closeModal }) => {
  const { register, handleSubmit } = useForm();

  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();

  const validateEmail = (email) =>
    mail.test(email) ? "" : "invalid email form";

  const validatePassword = (password) => (!password ? "invalid password" : "");

  const submit = (data) => {
    console.log(data.email, "data");
    const error = validateEmail(data.email) || validatePassword(data.password);

    setErrorEmail(validateEmail(data.email));
    setErrorPassword(validatePassword(data.password));

    console.log(errorEmail);
    console.log(errorPassword);
    !error && closeModal();
  };

  return (
    <div
      className="login"
      onClick={() => {
        closeModal();
        console.log("izadji");
      }}
    >
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="login-container"
      >
        <div className="login-container-header">Ulogujte se </div>
        <div className="login-container-input">
          <div
            className={
              errorEmail
                ? "login-container-input-field-error"
                : "login-container-input-field"
            }
          >
            <Email />
            <InputField
              value="first_name"
              placeholder="Email"
              type="email"
              className={"login-container-input-field-input"}
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={submit}
              errorMessage={"error"}
              errorStyle={""}
            />
          </div>
          <div className="create-acc-container-input-field">
            <Lock />
            <InputField
              value="first_name"
              placeholder="šifra"
              type="password"
              className={"login-container-input-field-input"}
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={submit}
              errorMessage={"error"}
              errorStyle={""}
            />
          </div>
        </div>
        <button className="login-container-button" onClick={submit}>
          Uloguj se
        </button>
      </form>
    </div>
  );
};

export default Login;
