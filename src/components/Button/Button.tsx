import React from "react";
import "./Button.css";

interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  color?: "green" | "red";
}

const Button = (props: IButtonProps) => {
  const { disabled, onClick, color } = props;

  return (
    <button
      className="Button"
      disabled={disabled}
      onClick={onClick}
      style={{
        backgroundColor:
          color === "green" ? "green" : color === "red" ? "red" : undefined,
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
