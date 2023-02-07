import React from "react";
import PageTitle from "../../../components/common/PageTitle";
import Layout from "../../../components/global/Layout";
import { BoardContainer, Container } from "../Announcement/style";

const Free = () => {
  return (
    <Layout>
      <Container>
        <PageTitle>자유게시판</PageTitle>
        <BoardContainer></BoardContainer>
      </Container>
    </Layout>
  );
};

export default Free;
