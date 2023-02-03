import { useState } from "react";
import { useMutation } from "react-query";
import { boardAPI } from "../../../apis/boardAPI";
import { useNavigate } from "react-router-dom";

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

  const createMutation = useMutation(() => boardAPI.createPost(PostData), {
    onSuccess: () => {
      console.log("게시글 생성 성공");
    },
    onError: () => {
      console.log("게시글 생성 실패");
    },
  });

  const handleCreateSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createMutation.mutate();
    navigate("/board");
  };

  return (
    <form onSubmit={handleCreateSubmit}>
      <h1>게시글 작성</h1>

      <label>제목</label>
      <input
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>카테고리</label>
      <input
        type="text"
        name="category"
        onChange={(e) => setCategory(e.target.value)}
      />

      <label>내용</label>
      <input
        type="text"
        name="content"
        onChange={(e) => setContent(e.target.value)}
      />

      <button onSubmit={handleCreateSubmit}>작성</button>
    </form>
  );
};

export default BoardCreate;
