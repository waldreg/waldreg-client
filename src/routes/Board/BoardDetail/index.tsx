import React from "react";
import { useQuery } from "react-query";
import { BoardContainer, Container } from "./style";
import { useRecoilValue } from "recoil";
import { boardDetailState } from "../../../states/board";
import PostDetail from "../../../components/board/PostDetail";
import { boardAPI } from "../../../apis/boardAPI";

const BoardDetail = () => {
  const postDetail = useRecoilValue(boardDetailState);

  const { data: post } = useQuery("post", () => boardAPI.getPost(postDetail), {
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

export default BoardDetail;
