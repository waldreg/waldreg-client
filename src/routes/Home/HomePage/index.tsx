import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/button";
import { useHome } from "../../../hooks/home/useHome";
import { ButtonContainer, HomeContainer } from "./style";

const HomePage = () => {
  const { home } = useHome();
  const navigate = useNavigate();
  const handleUpdateButtonClick = () => {
    navigate("update");
  };

  return (
    <>
      <HomeContainer>{home?.content}</HomeContainer>
      <ButtonContainer>
        <Button onClick={handleUpdateButtonClick}>글 수정하기</Button>
      </ButtonContainer>
    </>
  );
};

export default HomePage;
