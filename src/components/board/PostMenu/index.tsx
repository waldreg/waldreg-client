import React from "react";
import { MenuLi, MenuUl } from "./style";

const PostMenu = () => {
  return (
    <MenuUl>
      <MenuLi width={"10%"}>번호</MenuLi>
      <MenuLi width={"40%"}>제목</MenuLi>
      <MenuLi width={"10%"}>작성자</MenuLi>
      <MenuLi width={"10%"}>작성일</MenuLi>
      <MenuLi width={"10%"}>조회</MenuLi>
    </MenuUl>
  );
};

export default PostMenu;
