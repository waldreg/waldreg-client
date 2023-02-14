import React from "react";
import PageTitle from "../../../components/common/PageTitle";
import { Container } from "../Announcement/AnnouncementLayout/style";
import { BoardContainer } from "../Announcement/style";

const Free = () => {
  return (
    <Container>
      <PageTitle>자유게시판</PageTitle>
      <BoardContainer></BoardContainer>
    </Container>
  );
};

export default Free;
