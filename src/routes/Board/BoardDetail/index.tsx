import React from "react";
import { BoardContainer, Container } from "./style";
import { useRecoilValue } from "recoil";
import { boardDetailState } from "../../../states/board";
import PostDetail from "../../../components/board/PostDetail";
import { usePost } from "../../../hooks/board/usePost";

const BoardDetail = () => {
  const postDetail = useRecoilValue(boardDetailState);
  const { post } = usePost(postDetail);

  return (
    <Container>
      <BoardContainer>{post && <PostDetail post={post} />}</BoardContainer>
    </Container>
  );
};

export default BoardDetail;
