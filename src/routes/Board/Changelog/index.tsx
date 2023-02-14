import React from "react";
import PageTitle from "../../../components/common/PageTitle";
import { Container } from "../Announcement/AnnouncementLayout/style";
import { BoardContainer } from "../Announcement/style";

const Changelog = () => {
  return (
    <Container>
      <PageTitle>체인지 로그</PageTitle>
      <BoardContainer></BoardContainer>
    </Container>
  );
};

export default Changelog;
