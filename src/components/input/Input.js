import React from "react";

import { Error } from "../../assets/svg";

const InputField = ({
  value,
  placeholder,
  type,
  className,
  onSubmit,
  register,
  handleSubmit,
  errorMessage,
  errorStyle,
}) => {
  return (
    <>
      <input
        placeholder={placeholder}
        type={type}
        className={className}
        {...register(value)}
        onSubmit={handleSubmit(onSubmit)}
      />
      {errorMessage && (
        <div className={errorStyle}>
          <Error />
        </div>
      )}
    </>
  );
};

export default InputField;
