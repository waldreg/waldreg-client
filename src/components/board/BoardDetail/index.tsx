import React from "react";
import { Params, useNavigate, useParams } from "react-router-dom";
import { useBoardDetail } from "./../../../hooks/board/useBoardDetail";
import { BoardContainer } from "./style";
import { useBoardDelete } from "./../../../hooks/board/useBoardDelete";

const BoardDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<Params>();
  const { board } = useBoardDetail(id ? parseInt(id) : 0);

  const boardDelete = useBoardDelete(id ? parseInt(id) : 0);
  const handleDeleteButtonClick = () => {
    boardDelete.mutate();
    navigate(-1);
  };

  return (
    <>
      <BoardContainer>
        <div>{board?.id}</div>
        <div>{board?.title}</div>
        <div>{board?.category}</div>
        <div>{board?.content}</div>
        <button onClick={handleDeleteButtonClick}>삭제</button>
      </BoardContainer>
    </>
  );
};

export default BoardDetail;
