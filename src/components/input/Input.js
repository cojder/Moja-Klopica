import React, { useEffect, useState } from "react";

import { Error, VisbiltyEyeIcon } from "../../assets/svg";

const InputField = ({
  value,
  defualtValue,
  placeholder,
  type,
  className,
  onSubmit,
  register,
  handleSubmit,
  errorMessage,
  errorStyle,
  divClassName,
  inputIcon,
  editIcon,
  disabled = editIcon ? true : false,
  id,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [disableEditing, setDisableEditing] = useState(disabled);

  const handleShowPassword = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  const focusElement = () => {
    document.getElementById(id).focus();
  };

  useEffect(() => {
    if (!disableEditing) {
      focusElement();
    }
  }, [disableEditing]);

  return (
    <div className={divClassName}>
      {inputIcon}
      <input
        defaultValue={defualtValue}
        disabled={disableEditing}
        placeholder={placeholder}
        type={handleShowPassword()}
        className={className}
        {...register(value)}
        onSubmit={handleSubmit(onSubmit)}
        id={id}
      />
      <div
        style={{ cursor: "pointer" }}
        onClick={() => {
          setDisableEditing(false);
          focusElement();
        }}
      >
        {editIcon}
      </div>
      {errorMessage && (
        <div className={errorStyle}>
          <Error />
        </div>
      )}
      {type === "password" && (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowPassword(!showPassword);
            handleShowPassword();
          }}
        >
          <VisbiltyEyeIcon />
        </div>
      )}
    </div>
  );
};

export default InputField;
