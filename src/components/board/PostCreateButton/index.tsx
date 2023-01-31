import React from "react";
import { PencilIcon } from "../../Icons/BoardIcons";
import { CreateButton } from "./style";

const PostCreateButton = () => {
  return (
    <CreateButton>
      <PencilIcon />글 작성하기
    </CreateButton>
  );
};

export default PostCreateButton;
