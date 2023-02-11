import React from "react";
import { useSetRecoilState } from "recoil";
import PageTitle from "../../../components/common/PageTitle";
import { boardCategoryState } from "../../../states/board";
import { Container } from "../Announcement/AnnouncementLayout/style";
import { BoardContainer } from "../Announcement/style";

const Changelog = () => {
  const setBoardCategory = useSetRecoilState(boardCategoryState);
  setBoardCategory(4);

  return (
    <Container>
      <PageTitle>체인지 로그</PageTitle>
      <BoardContainer></BoardContainer>
    </Container>
  );
};

export default Changelog;
