import React from "react";
import { Button } from "./style";
import { PencilIcon } from "../../Icons/BoardIcons";

const CreateButton = (onSubmit: React.SyntheticEvent) => {
  return (
    <Button>
      <PencilIcon /> 작성
    </Button>
  );
};

export default CreateButton;
