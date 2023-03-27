import { useParams } from "react-router-dom";
import BoardCreateButton from "../../../components/board/BoardCreateButton";
import BoardList from "../../../components/board/BoardList";
import { useBoardList } from "../../../hooks/board/useBoardList";
import { BoardButtonContainer, BoardContainer } from "./style";

const BoardPage = () => {
  const { categoryId } = useParams();
  const { boardList } = useBoardList(parseInt(categoryId!!), 1, 6);

  return (
    <div>
      <BoardContainer>
        {boardList && <BoardList boardList={boardList} />}
      </BoardContainer>
      <BoardButtonContainer>
        <BoardCreateButton />
      </BoardButtonContainer>
    </div>
  );
};

export default BoardPage;
