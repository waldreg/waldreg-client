import React from "react";
import { useNavigate } from "react-router-dom";
import { PencilIcon } from "../../Icons/BoardIcons";
import { Button } from "./style";

const PostCreateButton = () => {
  const navigate = useNavigate();

  const handleCreateButtonClick = () => {
    navigate(`/board/create`);
  };

  return (
    <Button onClick={handleCreateButtonClick}>
      <PencilIcon />글 작성하기
    </Button>
  );
};

export default PostCreateButton;
