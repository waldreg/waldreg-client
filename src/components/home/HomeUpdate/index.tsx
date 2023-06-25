import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHome } from "../../../hooks/home/useHome";
import { useHomeUpdate } from "../../../hooks/home/useHomeUpdate";
import { ButtonContainer } from "../../../routes/Home/HomePage/style";
import CreateButton from "../../common/createbutton";
import { CharacterCount, HomeTextarea } from "./style";
import FONT from "../../../constants/fonts";
import Container from "../../common/container";

function HomeUpdate() {
  const { home } = useHome();
  const navigate = useNavigate();
  const [content, setContent] = useState(home?.content);
  const [characterCount, setCharacterCount] = useState(content?.length || 0);
  const MAX_CHARACTER_COUNT = 10000;

  const updateMutation = useHomeUpdate(content!!);

  const handleUpdateSubmit = () => {
    updateMutation.mutate();
    navigate(-1);
  };

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value;
    setContent(text);
    setCharacterCount(text.length);
  };

  return (
    <>
      <Container
        height="85%"
        style={{
          marginBottom: "1rem",
          overflowX: "hidden",
        }}
      >
        <HomeTextarea
          style={FONT.BODY1}
          onChange={handleChange}
          value={content}
          maxLength={MAX_CHARACTER_COUNT}
        />
      </Container>
      <CharacterCount style={FONT.BODY1}>
        {characterCount}/{MAX_CHARACTER_COUNT}
      </CharacterCount>
      <ButtonContainer>
        <CreateButton onClick={handleUpdateSubmit} />
      </ButtonContainer>
    </>
  );
}

export default HomeUpdate;
