import React from "react";
import { PencilIcon } from "../../Icons/BoardIcons";
import { Button } from "./style";

const CreateButton = () => {
  return (
    <Button>
      <PencilIcon />글 작성하기
    </Button>
  );
};

export default CreateButton;
