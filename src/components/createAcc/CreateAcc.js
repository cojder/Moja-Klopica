import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Email, Person, Lock, Phone2 } from "../../assets/svg";

import InputField from "../input/Input";

const mail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASS_LENGHT = 8;
const phoneNumber = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

const CreateAcc = ({ setShowModal, closeModal }) => {
  const { register, handleSubmit } = useForm();
  const [errorEmail, setErrorEmail] = useState();
  const [errorPassword, setErrorPassword] = useState();
  const [errorName, setErrorName] = useState();
  const [errorPhone, setErrorPhone] = useState();

  const validateEmail = (email) =>
    mail.test(email) ? "" : "invalid email form";

  const validateName = (name) => (!name ? "must have a name" : "");
  const validatePhone = (phone) =>
    !phone || phoneNumber.test(phone)
      ? "must have pohone number or invalid number"
      : "";

  const validatePassword = (password) =>
    !password || password.length < PASS_LENGHT ? "invalid password" : "";

  const submit = (data) => {
    const error =
      validatePhone(data.phone) ||
      validateName(data.name) ||
      validateEmail(data.email) ||
      validatePassword(data.password);

    setErrorEmail(validateEmail(data.email));
    setErrorPassword(validatePassword(data.password));
    setErrorName(validateName(data.name));
    setErrorPhone(validatePhone(data.phone));

    !error && setShowModal("successSingup") && closeModal();
  };

  return (
    <div
      className="create-acc"
      onClick={() => {
        closeModal();
      }}
    >
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="create-acc-container"
      >
        <div className="create-acc-container-header">Registruj se</div>
        <div className="create-acc-container-input">
          <div
            className={
              errorName
                ? "create-acc-container-input-field-error"
                : "create-acc-container-input-field"
            }
          >
            <Person />
            <InputField
              value="name"
              placeholder="Ime"
              type="text"
              className={"create-acc-container-input-field-input"}
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={submit}
              errorMessage={errorName}
              errorStyle={""}
            />
          </div>
          <div
            c
            className={
              errorEmail
                ? "create-acc-container-input-field-error"
                : "create-acc-container-input-field"
            }
          >
            <Email />
            <InputField
              value="email"
              placeholder="Email"
              type="email"
              className={"create-acc-container-input-field-input"}
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={submit}
              errorMessage={errorEmail}
              errorStyle={""}
            />
          </div>
          <div
            className={
              errorPassword
                ? "create-acc-container-input-field-error"
                : "create-acc-container-input-field"
            }
          >
            <Lock />
            <InputField
              value="password"
              placeholder="šifra"
              type="password"
              className={"create-acc-container-input-field-input"}
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={submit}
              errorMessage={errorPassword}
              errorStyle={""}
            />
          </div>
          <div
            className={
              errorPassword
                ? "create-acc-container-input-field-error"
                : "create-acc-container-input-field"
            }
          >
            <Lock />
            <InputField
              value="password"
              placeholder="Potvrdi šifru"
              type="password"
              className={"create-acc-container-input-field-input"}
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={submit}
              errorMessage={errorPassword}
              errorStyle={""}
            />
          </div>
          <div
            className={
              errorPhone
                ? "create-acc-container-input-field-error"
                : "create-acc-container-input-field"
            }
          >
            <Phone2 />
            <InputField
              value="phone"
              placeholder="Br. tel"
              type="tel"
              className={"create-acc-container-input-field-input"}
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={submit}
              errorMessage={errorPhone}
              errorStyle={""}
            />
          </div>
        </div>
        <button
          className="create-acc-container-button"
          onClick={handleSubmit(submit)}
        >
          Registruj se
        </button>
      </form>
    </div>
  );
};

export default CreateAcc;
