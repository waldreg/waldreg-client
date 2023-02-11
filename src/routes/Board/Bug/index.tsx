import React from "react";
import { useSetRecoilState } from "recoil";
import PageTitle from "../../../components/common/PageTitle";
import { boardCategoryState } from "../../../states/board";
import { Container } from "../Announcement/AnnouncementLayout/style";
import { BoardContainer } from "../Announcement/style";

const Bug = () => {
  const setBoardCategory = useSetRecoilState(boardCategoryState);
  setBoardCategory(3);

  return (
    <Container>
      <PageTitle>버그가 있어요!</PageTitle>
      <BoardContainer></BoardContainer>
    </Container>
  );
};

export default Bug;
