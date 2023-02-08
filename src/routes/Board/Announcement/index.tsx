import React from "react";
import BoardCreateButton from "../../../components/board/BoardCreateButton";
import BoardList from "../../../components/board/BoardList";
import PageTitle from "../../../components/common/PageTitle";
import { useBoardList } from "../../../hooks/board/useBoardList";
import { BoardButtonContainer, BoardContainer, Container } from "./style";

const Announcement = () => {
  const { boardList } = useBoardList();

  return (
    <Container>
      <PageTitle>공지사항</PageTitle>
      <BoardContainer>
        {boardList && <BoardList boardList={boardList} />}
      </BoardContainer>
      <BoardButtonContainer>
        <BoardCreateButton />
      </BoardButtonContainer>
    </Container>
  );
};

export default Announcement;
