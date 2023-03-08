import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient, useMutation } from "react-query";

import { Email, Person, Lock, Phone2 } from "../../assets/svg";
import InputField from "../input/Input";
import { UserService } from "../../apis/User";
import {
  MAX_PASS_LENGHT,
  MIN_PASS_LENGHT,
  mail,
  phoneNumber,
} from "../../constants/Constants";

const CreateAcc = ({ setShowModal, closeModal }) => {
  const { register, handleSubmit } = useForm();
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorSurname, setErrorSurname] = useState("");
  const queryClient = useQueryClient();

  const createAccMutation = useMutation((crendentials) => {
    UserService.registerClient(crendentials).then(() =>
      setShowModal("successSingup")
    );
    queryClient.setQueryData("user", crendentials);
  });

  const validateEmail = (email) =>
    mail.test(email) ? "" : "invalid email form";

  const validateName = (name) => (!name ? "must have a name" : "");
  const validateSurname = (surname) => (!surname ? "musrt have a surname" : "");
  const validatePhone = (phone) =>
    !phone || phoneNumber.test(phone)
      ? "must have pohone number or invalid number"
      : "";

  const confirmPassword = (password, passwordConfirm) =>
    password === passwordConfirm ? "" : "passewords must be same";

  const validatePassword = (password) =>
    !password ||
    password.length < MIN_PASS_LENGHT ||
    password.length > MAX_PASS_LENGHT
      ? "invalid password"
      : "";

  // const { mutate } = useMutation("user", registerClient(data)); // kortisti se useMutate za post
  const submit = (data) => {
    const error =
      validatePhone(data.phoneNumber) ||
      validateName(data.name) ||
      validateSurname(data.surname) ||
      validateEmail(data.email) ||
      validatePassword(data.password) ||
      confirmPassword(data.password, data.passwordConfirm);

    setErrorEmail(validateEmail(data.email));
    setErrorPassword(validatePassword(data.password));
    setErrorConfirmPassword(
      confirmPassword(data.password, data.passwordConfirm)
    );
    setErrorName(validateName(data.name));
    setErrorSurname(validateSurname(data.surname));
    setErrorPhone(validatePhone(data.phoneNumber));

    !error && createAccMutation.mutateAsync(data);
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
          <InputField
            inputIcon={<Person />}
            divClassName={
              errorName
                ? "create-acc-container-input-field-error"
                : "create-acc-container-input-field"
            }
            value="name"
            placeholder="Ime"
            type="text"
            className={"create-acc-container-input-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            errorMessage={errorName}
            errorStyle={""}
            id={"createAccName"}
          />

          <InputField
            inputIcon={<Person />}
            divClassName={
              errorSurname
                ? "create-acc-container-input-field-error"
                : "create-acc-container-input-field"
            }
            value="surname"
            placeholder="Prezime"
            type="text"
            className={"create-acc-container-input-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            errorMessage={errorName}
            errorStyle={""}
            id={"createAccSurname"}
          />

          <InputField
            inputIcon={<Email />}
            divClassName={
              errorEmail
                ? "create-acc-container-input-field-error"
                : "create-acc-container-input-field"
            }
            value="email"
            placeholder="Email"
            type="email"
            className={"create-acc-container-input-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            errorMessage={errorEmail}
            errorStyle={""}
            id={"createAccEmail"}
          />

          <InputField
            inputIcon={<Lock />}
            divClassName={
              errorPassword
                ? "create-acc-container-input-field-error"
                : "create-acc-container-input-field"
            }
            value="password"
            placeholder="šifra"
            type="password"
            className={"create-acc-container-input-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            errorMessage={errorPassword}
            errorStyle={""}
            id={"createAccPassword"}
          />

          <InputField
            inputIcon={<Lock />}
            divClassName={
              errorPassword || errorConfirmPassword
                ? "create-acc-container-input-field-error"
                : "create-acc-container-input-field"
            }
            value="passwordConfirm"
            placeholder="Potvrdi šifru"
            type="password"
            className={"create-acc-container-input-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            errorMessage={errorPassword}
            errorStyle={""}
            id={"createAccPasswordConfirm"}
          />

          <InputField
            inputIcon={<Phone2 />}
            divClassName={
              errorPhone
                ? "create-acc-container-input-field-error"
                : "create-acc-container-input-field"
            }
            value="phoneNumber"
            placeholder="Br. tel"
            type="tel"
            className={"create-acc-container-input-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            errorMessage={errorPhone}
            errorStyle={""}
            id={"createAccPhone"}
          />
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
