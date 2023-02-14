import React from "react";
import PageTitle from "../../../components/common/PageTitle";
import { Container } from "../Announcement/AnnouncementLayout/style";
import { BoardContainer } from "../Announcement/style";

const Bug = () => {
  return (
    <Container>
      <PageTitle>버그가 있어요!</PageTitle>
      <BoardContainer></BoardContainer>
    </Container>
  );
};

export default Bug;
