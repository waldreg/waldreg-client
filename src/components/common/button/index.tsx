import React from "react";
import { PencilGreenIcon } from "../../Icons/BoardIcons";
import { StyledButton } from "./style";

type ButtonProps = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  children: string;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <PencilGreenIcon />글 {children}하기
    </StyledButton>
  );
};

export default Button;
