import React from "react";
import styled from "styled-components";
import { Button as MuiButton, ButtonProps } from "@material-ui/core";

const StyledButton = styled(MuiButton)``;

interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = (
  props: IButtonProps & Omit<ButtonProps, keyof IButtonProps>
) => {
  const { children, onClick, ...rest } = props;

  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
