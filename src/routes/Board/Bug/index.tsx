import React from "react";
import PageTitle from "../../../components/common/PageTitle";
import Layout from "../../../components/global/Layout";
import { BoardContainer, Container } from "../Announcement/style";

const Bug = () => {
  return (
    <Layout>
      <Container>
        <PageTitle>버그가 있어요!</PageTitle>
        <BoardContainer></BoardContainer>
      </Container>
    </Layout>
  );
};

export default Bug;