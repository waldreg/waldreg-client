import React, { ReactNode } from 'react';
import { PencilGreenIcon } from '../../Icons/BoardIcons';
import { ButtonStyle } from './style';
import FONT from '../../../constants/fonts';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <ButtonStyle onClick={onClick} style={FONT.SUBTITLE1}>
      <PencilGreenIcon />
      {children}
    </ButtonStyle>
  );
};

export default Button;
