import React from "react";
import { useSetRecoilState } from "recoil";
import PageTitle from "../../../components/common/PageTitle";
import { boardCategoryState } from "../../../states/board";
import { Container } from "../Announcement/AnnouncementLayout/style";
import { BoardContainer } from "../Announcement/style";

const Question = () => {
  const setBoardCategory = useSetRecoilState(boardCategoryState);
  setBoardCategory(1);

  return (
    <Container>
      <PageTitle>질문게시판</PageTitle>
      <BoardContainer></BoardContainer>
    </Container>
  );
};

export default Question;
