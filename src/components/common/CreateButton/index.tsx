import React from "react";
import { PencilWhiteIcon } from "../../Icons/BoardIcons";
import { Button } from "./style";

const CreateButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button>
      <PencilWhiteIcon style={{ marginRight: "0.5rem" }} /> 작성
    </Button>
  );
};

export default CreateButton;
