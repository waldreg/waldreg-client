import React from "react";
import { BoardContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Board } from "../../../interfaces/board";
import { boardIdState } from "../../../states/board";

interface BoardListProps {
  boardList: Board[];
}

function BoardList({ boardList }: BoardListProps) {
  const navigate = useNavigate();
  const setBoardId = useSetRecoilState(boardIdState);

  const handleBoardClick = (e: React.MouseEvent) => {
    const boardId = e.currentTarget.firstChild?.textContent;
    setBoardId(boardId);
    navigate(`${boardId}`);
  };

  return (
    <div>
      {boardList.map((board) => (
        <BoardContainer key={board.id} onClick={handleBoardClick}>
          <div>{board.id}</div>
          <div>{board.title}</div>
          <div>{board.category}</div>
        </BoardContainer>
      ))}
    </div>
  );
}

export default BoardList;
