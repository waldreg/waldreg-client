import { BoardContainer, Container } from "../BoardList/style";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "./../../../hooks/board/useCreatePost";

const BoardCreate = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const PostData = {
    title,
    category,
    content,
  };

  const createMutation = useCreatePost(PostData);

  const handleCreateSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createMutation.mutate();
    navigate("/board");
  };

  return (
    <Container>
      <BoardContainer>
        <form onSubmit={handleCreateSubmit}>
          <h1>게시글 작성</h1>

          <label>제목</label>
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
          <br />

          <label>카테고리</label>
          <input
            type="text"
            name="category"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCategory(e.target.value)
            }
          />
          <br />

          <label>내용</label>
          <input
            type="text"
            name="content"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setContent(e.target.value)
            }
          />
          <br />

          <button onSubmit={handleCreateSubmit}>작성</button>
        </form>
      </BoardContainer>
    </Container>
  );
};

export default BoardCreate;
