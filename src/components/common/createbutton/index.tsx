import React from "react";
import { PencilWhiteIcon } from "../../Icons/BoardIcons";
import { Button, ButtonText } from "./style";
import FONT from "../../../constants/fonts";

interface CreateButtonProps {
  onClick?: (e: React.SyntheticEvent) => void;
  onSubmit?: (e: React.SyntheticEvent) => void;
}

const CreateButton = ({ onClick, onSubmit }: CreateButtonProps) => {
  return (
    <Button onClick={onClick} onSubmit={onSubmit} style={FONT.SUBTITLE1}>
      <PencilWhiteIcon /> <ButtonText>작성</ButtonText>
    </Button>
  );
};

export default CreateButton;
