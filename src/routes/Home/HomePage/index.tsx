import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/button";
import { useHome } from "../../../hooks/home/useHome";
import { ButtonContainer, HomeContainer } from "./style";
import FONT from "../../../constants/fonts";

const HomePage = () => {
  const { home } = useHome();
  const navigate = useNavigate();
  const handleUpdateButtonClick = () => {
    navigate("update");
  };

  const replaceValue = home?.content
    ? home.content.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))
    : null;

  return (
    <>
      <HomeContainer style={FONT.BODY1}>{replaceValue}</HomeContainer>
      <ButtonContainer>
        <Button onClick={handleUpdateButtonClick}>글 수정하기</Button>
      </ButtonContainer>
    </>
  );
};

export default HomePage;
