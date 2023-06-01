import { ButtonContainer, HomeText } from "./style";

import AuthContext from "../../../states/auth-context";
import Button from "../../../components/common/button";
import Container from "../../../components/common/container";
import FONT from "../../../constants/fonts";
import React from "react";
import { useContext } from "react";
import { useHome } from "../../../hooks/home/useHome";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const authCtx = useContext(AuthContext);
  const { home } = useHome();
  const navigate = useNavigate();
  const handleUpdateButtonClick = () => {
    navigate("update");
  };
  console.log(authCtx.isLoggedIn);
  if (!authCtx.isLoggedIn) {
    navigate("/login");
  }

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
