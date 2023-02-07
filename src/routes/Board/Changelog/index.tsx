import React from "react";
import PageTitle from "../../../components/common/PageTitle";
import Layout from "../../../components/global/Layout";
import { BoardContainer, Container } from "../Announcement/style";

const Changelog = () => {
  return (
    <Layout>
      <Container>
        <PageTitle>체인지 로그</PageTitle>
        <BoardContainer></BoardContainer>
      </Container>
    </Layout>
  );
};

export default Changelog;
