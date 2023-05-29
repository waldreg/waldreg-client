import React from "react";
import { PencilWhiteIcon } from "../../Icons/BoardIcons";
import { Button } from "./style";

interface CreateButtonProps {
  onSubmit: (e: React.SyntheticEvent) => void;
}

const CreateButton = ({ onSubmit }: CreateButtonProps) => {
  return (
    <Button onSubmit={onSubmit}>
      <PencilWhiteIcon style={{ marginRight: "0.5rem" }} /> 작성
    </Button>
  );
};

export default CreateButton;
