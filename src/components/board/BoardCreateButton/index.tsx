import React from "react";
import { useNavigate } from "react-router-dom";
import { PencilIcon } from "../../Icons/BoardIcons";
import { Button } from "./style";

const BoardCreateButton = () => {
  const navigate = useNavigate();

  const handleCreateButtonClick = () => {
    navigate("create");
  };

  return (
    <Button onClick={handleCreateButtonClick}>
      <PencilIcon />글 작성하기
    </Button>
  );
};

export default BoardCreateButton;
