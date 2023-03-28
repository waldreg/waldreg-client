import React from "react";
import Button from "../../components/common/button";
import { Container } from "../Board/BoardLayout/style";
import { useHome } from "./../../hooks/home/useHome";
import { HomeContainer } from "./style";

const Home = () => {
  const { home } = useHome();
  const handleUpdateButtonClick = () => {};

  return (
    <Container>
      <HomeContainer>{home?.content}</HomeContainer>
      <Button onClick={handleUpdateButtonClick}>글 수정하기</Button>
    </Container>
  );
};

export default Home;
