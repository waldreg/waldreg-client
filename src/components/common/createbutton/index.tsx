import React from "react";
import { PencilWhiteIcon } from "../../Icons/BoardIcons";
import { Button } from "./style";

interface CreateButtonProps {
  onClick?: (e: React.SyntheticEvent) => void;
  onSubmit?: (e: React.SyntheticEvent) => void;
}

const CreateButton = ({ onClick, onSubmit }: CreateButtonProps) => {
  return (
    <Button onClick={onClick} onSubmit={onSubmit}>
      <PencilWhiteIcon style={{ marginRight: "0.5rem" }} /> 작성
    </Button>
  );
};

export default CreateButton;
