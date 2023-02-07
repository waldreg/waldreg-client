import React from "react";
import { BoardContainer, Container } from "./style";
import { useRecoilValue } from "recoil";
import { boardDetailState } from "../../../states/board";
import PostDetail from "../../../components/board/PostDetail";
import { usePostDetail } from "../../../hooks/board/usePostDetail";

const BoardDetail = () => {
  const postDetail = useRecoilValue(boardDetailState);
  const { post } = usePostDetail(postDetail);

  return (
    <Container>
      <BoardContainer>{post && <PostDetail post={post} />}</BoardContainer>
    </Container>
  );
};

export default BoardDetail;
