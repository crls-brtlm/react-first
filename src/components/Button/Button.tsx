import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #004b7b;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
`;

interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  color?: "green" | "red";
}

const Button = (props: IButtonProps) => {
  const { disabled, onClick, color } = props;

  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      style={{
        backgroundColor:
          color === "green" ? "green" : color === "red" ? "red" : undefined,
      }}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
