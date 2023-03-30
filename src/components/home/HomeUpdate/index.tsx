import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHome } from "../../../hooks/home/useHome";
import { useHomeUpdate } from "../../../hooks/home/useHomeUpdate";
import { ButtonContainer } from "../../../routes/Home/HomePage/style";
import CreateButton from "../../common/createbutton";
import { HomeTextarea } from "./style";

function HomeUpdate() {
  const { home } = useHome();
  const navigate = useNavigate();
  const [content, setContent] = useState(home?.content);

  const updateMutation = useHomeUpdate(content!!);

  const handleUpdateSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    updateMutation.mutate();
    navigate(-1);
  };

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
    console.log(content);
  };

  return (
    <form onSubmit={handleUpdateSubmit}>
      <HomeTextarea onChange={handleChange} value={content} />
      <ButtonContainer>
        <CreateButton onSubmit={handleUpdateSubmit} />
      </ButtonContainer>
    </form>
  );
}

export default HomeUpdate;