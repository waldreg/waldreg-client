import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBoardCreate } from "../../../hooks/board/useBoardCreate";
import FONT from "../../../constants/fonts";
import {
  BoardButtonContainer,
  BoardContentTextArea,
  BoardTitleInput,
} from "./style";
import CreateButton from "../../common/createbutton";
import BoardFileUpload from "../BoardFileUpload";
import Container from "../../common/container";
import BoardListButton from "../BoardListButton";

const BoardCreate = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const formData = new FormData();

  const data = {
    title: title,
    content: content,
    category_id: categoryId,
  };

  formData.append(
    "boardCreateRequest",
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );

  const createMutation = useBoardCreate(formData);

  const handleCreateSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createMutation.mutate();
  };

  return (
    <Container
      style={{
        padding: "2rem 1.7rem 1rem",
        margin: "0.6rem 0",
        minWidth: "35rem",
        maxHeight: "40rem",
      }}
    >
      <form onSubmit={handleCreateSubmit}>
        <BoardTitleInput
          style={FONT.SUBTITLE2}
          type="text"
          placeholder="제목"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setTitle(e.currentTarget.value)
          }
        />
        <BoardContentTextArea
          style={FONT.SUBTITLE1}
          placeholder="내용을 작성해주세요"
          onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
            setContent(e.currentTarget.value)
          }
        />
        <BoardFileUpload formData={formData} create={true} />
        <BoardButtonContainer>
          <BoardListButton />
          <CreateButton onSubmit={handleCreateSubmit} />
        </BoardButtonContainer>
      </form>
    </Container>
  );
};

export default BoardCreate;
