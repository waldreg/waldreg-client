import React, { ReactNode } from "react";
import { PencilGreenIcon } from "../../Icons/BoardIcons";
import { ButtonStyle } from "./style";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <ButtonStyle onClick={onClick}>
      <PencilGreenIcon />
      {children}
    </ButtonStyle>
  );
};

export default Button;
