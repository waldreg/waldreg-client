import React from "react";
import { Button } from "./style";
import { PencilWhiteIcon } from "../../Icons/BoardIcons";

const CreateButton = () => {
  return (
    <Button>
      <PencilWhiteIcon /> 작성
    </Button>
  );
};

export default CreateButton;
