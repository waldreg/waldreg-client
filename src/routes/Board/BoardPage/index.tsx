import BoardCreateButton from "../../../components/board/BoardCreateButton";
import BoardList from "../../../components/board/BoardList";
import { useBoardList } from "../../../hooks/board/useBoardList";
import { BoardButtonContainer, BoardContainer } from "./style";

const BoardPage = () => {
  const { boardList } = useBoardList(1, 1, 6);

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

export default BoardPage;
