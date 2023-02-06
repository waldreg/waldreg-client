import React from "react";
import { Input } from "./style";

const PostTitleInput = (onChange: React.ChangeEvent<HTMLInputElement>) => {
  return <Input type="text" placeholder="제목" />;
};

export default PostTitleInput;
