import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  HomeContainer,
} from "../../../routes/Home/HomePage/style";

const HomeUpdate = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeContainer>
        <textarea>home</textarea>
      </HomeContainer>
      <ButtonContainer>
        <button onClick={() => navigate("/")}>완료</button>
      </ButtonContainer>
    </>
  );
};

export default HomeUpdate;
