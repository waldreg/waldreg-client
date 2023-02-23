import BoardCreateButton from "../../../components/board/BoardCreateButton";
import BoardList from "../../../components/board/BoardList";
import { useBoardList } from "../../../hooks/board/useBoardList";
import { BoardButtonContainer, BoardContainer } from "./style";
import { Params, useParams } from "react-router-dom";

const BoardPage = () => {
  const { categoryId } = useParams<Params>();
  const { boardList } = useBoardList(parseInt(categoryId!!), 1, 6);

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
