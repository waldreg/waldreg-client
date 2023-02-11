import React from "react";
import BoardCreateButton from "../../../components/board/BoardCreateButton";
import BoardList from "../../../components/board/BoardList";
import { useBoardList } from "../../../hooks/board/useBoardList";
import { BoardButtonContainer, BoardContainer } from "./style";
import { useSetRecoilState } from "recoil";
import { boardCategoryState } from "../../../states/board";

const Announcement = () => {
  const { boardList } = useBoardList(1, 1, 1);

  const setBoardCategory = useSetRecoilState(boardCategoryState);
  setBoardCategory(1);

  return (
    <>
      <BoardContainer>
        {boardList && <BoardList boardList={boardList} />}
      </BoardContainer>
      <BoardButtonContainer>
        <BoardCreateButton />
      </BoardButtonContainer>
    </>
  );
};

export default Announcement;
