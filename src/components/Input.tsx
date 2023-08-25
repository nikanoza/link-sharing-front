import { UseFormRegister, FieldError } from "react-hook-form";
import React from "react";

type PropsType = {
  register: UseFormRegister<any>;
  label: string;
  placeholder: string;
  icon: React.ReactElement;
  error: FieldError | undefined;
};

const Input: React.FC<PropsType> = ({
  register,
  label,
  placeholder,
  icon,
  error,
}) => {
  return (
    <div className="w-full relative">
      <input
        {...register(label)}
        className="w-full h-12 border border-solid border-borders rounded-lg py-3 pl-12 pr-4"
        placeholder={placeholder}
        id={label}
      />
      {icon}
      <p className="w-full h-3 flex justify-center items-center">
        {error && error.message}
      </p>
    </div>
  );
};

export default Input;
