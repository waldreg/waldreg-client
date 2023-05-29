import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/button";
import { useHome } from "../../../hooks/home/useHome";
import { ButtonContainer, HomeText } from "./style";
import FONT from "../../../constants/fonts";
import Container from "../../../components/common/container";

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
      <Container
        height="85%"
        style={{
          marginBottom: "1rem",
          overflow: "scroll",
          overflowX: "hidden",
          wordBreak: "break-all",
        }}
      >
        <HomeText style={FONT.BODY1}>{replaceValue}</HomeText>
      </Container>
      <ButtonContainer>
        <Button onClick={handleUpdateButtonClick}>글 수정하기</Button>
      </ButtonContainer>
    </>
  );
};

export default HomePage;
