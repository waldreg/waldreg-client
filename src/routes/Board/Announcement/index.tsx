import React from "react";
import BoardCreateButton from "../../../components/board/BoardCreateButton";
import BoardList from "../../../components/board/BoardList";
import PageTitle from "../../../components/common/PageTitle";
import Layout from "../../../components/global/Layout";
import { useBoardList } from "../../../hooks/board/useBoardList";
import { BoardButtonContainer, BoardContainer, Container } from "./style";

const Announcement = () => {
  const { boardList } = useBoardList();

  return (
    <Layout>
      <Container>
        <PageTitle>공지사항</PageTitle>
        <BoardContainer>
          {boardList && <BoardList boardList={boardList} />}
        </BoardContainer>
        <BoardButtonContainer>
          <BoardCreateButton />
        </BoardButtonContainer>
      </Container>
    </Layout>
  );
};

export default Announcement;
