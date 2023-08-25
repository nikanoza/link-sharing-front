import { MouseEventHandler } from "react";

type PropsType = {
  type: "button" | "reset" | "submit";
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button: React.FC<PropsType> = ({ type, text, onClick, className }) => {
  return (
    <button
      type={type}
      className={`w-full h-[46px] bg-electric rounded-lg border-none text-base text-white font-semibold ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
