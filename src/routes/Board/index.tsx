import React from "react";
import { useQuery } from "react-query";
import { boardAPI } from "../../apis/boardAPI";
import PostDetail from "./../../components/board/PostDetail/index";
import { BoardContainer, Container } from "./style";

const Board = () => {
  const { data: post } = useQuery("post", () => boardAPI.getPost(2), {
    onSuccess: (data) => {
      console.log("특정 게시글 가져오기 성공");
    },
    onError: () => {
      console.log("특정 게시글 가져오기 실패");
    },
  });

  return (
    <Container>
      <BoardContainer>{post && <PostDetail post={post} />}</BoardContainer>
    </Container>
  );
};

export default Board;
