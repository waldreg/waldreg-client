import React from "react";
import BoardCreateButton from "../../../components/board/BoardCreateButton";
import BoardList from "../../../components/board/BoardList";
import { useBoardList } from "../../../hooks/board/useBoardList";
import { BoardButtonContainer, BoardContainer } from "./style";
import { useSetRecoilState } from "recoil";
import { boardCategoryState } from "../../../states/board";
import { useBoardCategoryCreate } from "../../../hooks/category/useBoardCategoryCreate";

const Announcement = () => {
  const { boardList } = useBoardList(1, 1, 5);

  const setBoardCategory = useSetRecoilState(boardCategoryState);
  setBoardCategory(1);

  const createMutation = useBoardCategoryCreate("공지사항");

  return (
    <>
      <BoardContainer>
        {boardList && <BoardList boardList={boardList} />}
      </BoardContainer>
      <BoardButtonContainer>
        <BoardCreateButton />
      </BoardButtonContainer>

      <button onClick={() => createMutation.mutate()}>공지사항 생성</button>
    </>
  );
};

export default Announcement;
