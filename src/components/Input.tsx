import { UseFormRegister, FieldError } from "react-hook-form";
import React from "react";

type PropsType = {
  register: UseFormRegister<any>;
  label: string;
  placeholder: string;
  error: FieldError | undefined;
  type: string;
  icon?: React.ReactElement;
};

const Input: React.FC<PropsType> = ({
  register,
  label,
  placeholder,
  icon,
  error,
  type,
}) => {
  return (
    <div className="w-full relative">
      <input
        {...register(label)}
        type={type}
        className={`w-full h-12 border border-solid border-borders rounded-lg py-3 pr-4 ${
          icon ? "pl-12" : "pl-4"
        }`}
        placeholder={placeholder}
        id={label}
      />
      {icon}
      <p className="w-full h-3 flex text-xs text-error font-semibold items-center">
        {error && error.message}
      </p>
    </div>
  );
};

export default Input;
