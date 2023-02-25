import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/button";
import { ButtonContainer, HomeContainer } from "./style";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HomeContainer>home</HomeContainer>
      <ButtonContainer>
        <Button onClick={() => navigate("update")}>수정</Button>
      </ButtonContainer>
    </>
  );
}

export default HomePage;
