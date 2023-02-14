import React from "react";
import PageTitle from "../../../components/common/PageTitle";
import { Container } from "../Announcement/AnnouncementLayout/style";
import { BoardContainer } from "../Announcement/style";

const Question = () => {
  return (
    <Container>
      <PageTitle>질문게시판</PageTitle>
      <BoardContainer></BoardContainer>
    </Container>
  );
};

export default Question;
