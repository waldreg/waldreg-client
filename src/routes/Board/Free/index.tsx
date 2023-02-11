import React from "react";
import { useSetRecoilState } from "recoil";
import PageTitle from "../../../components/common/PageTitle";
import { boardCategoryState } from "../../../states/board";
import { Container } from "../Announcement/AnnouncementLayout/style";
import { BoardContainer } from "../Announcement/style";

const Free = () => {
  const setBoardCategory = useSetRecoilState(boardCategoryState);
  setBoardCategory(2);

  return (
    <Container>
      <PageTitle>자유게시판</PageTitle>
      <BoardContainer></BoardContainer>
    </Container>
  );
};

export default Free;
