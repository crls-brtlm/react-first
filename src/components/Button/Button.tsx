import React from "react";
import "./Button.css";

interface IButtonProps {
  children: React.ReactNode;
}

const Button = (props: IButtonProps) => {
  return <button className="Button">{props.children}</button>;
};

export default Button;
