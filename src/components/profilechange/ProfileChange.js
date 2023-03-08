import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

import Profile from "../../assets/Profile.png";
import InputField from "../input/Input";
import { Person, Email, Lock, Phone2, Pen } from "../../assets/svg";
import { UserService } from "../../apis/User";

const ProfileCgange = ({ showModal }) => {
  const { register, handleSubmit } = useForm();

  const {
    data: user,
    isError,
    error,
    isLoading,
  } = useQuery("user", {
    queryFn: () => UserService.getLogedUser(),
  });

  const { data: userLogin } = useQuery("userLogin");

  const submit = (data) => {
    const { name, surname, phoneNumber } = data;
    UserService.updateClient({ id: user.id, name, surname, phoneNumber });
  };

  if (isLoading) {
    return <div>LOADING</div>;
  }

  if (isError) {
    return <div>Error{error}</div>;
  }

  return (
    <div className="profile-change">
      <div className="profile-change-left">izmena profila</div>
      <div className="profile-change-right">
        <div className="profile-change-right-header">
          <img
            className="profile-change-right-header-img"
            src={Profile}
            alt="slika"
          />
          <div
            onClick={showModal}
            className="profile-change-right-header-password"
          >
            <Lock /> Promeni sifru
          </div>
        </div>

        <form className="profile-change-right-container">
          <InputField
            inputIcon={<Person />}
            editIcon={<Pen />}
            divClassName={"profile-change-right-container-field"}
            value="name"
            defualtValue={user?.name}
            type="text"
            className={"profile-change-right-container-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            id={"name"}
          />
          <InputField
            inputIcon={<Person />}
            editIcon={<Pen />}
            defualtValue={user?.surname}
            divClassName={"profile-change-right-container-field"}
            value="surname"
            type="text"
            className={"profile-change-right-container-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            id={"surname"}
          />
          <InputField
            inputIcon={<Email />}
            divClassName={"profile-change-right-container-field"}
            value="email"
            type="email"
            defualtValue={userLogin}
            disabled={"disabled"}
            className={"profile-change-right-container-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
          />
          <InputField
            inputIcon={<Phone2 />}
            editIcon={<Pen />}
            defualtValue={user?.phoneNumber}
            divClassName={"profile-change-right-container-field"}
            value="phoneNumber"
            type="tel"
            className={"profile-change-right-container-field-input"}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={submit}
            id={"phoneNumber"}
          />
        </form>

        <button
          onClick={handleSubmit(submit)}
          className="profile-change-right-confirm"
        >
          Protvrdi
        </button>
      </div>
    </div>
  );
};

export default ProfileCgange;
