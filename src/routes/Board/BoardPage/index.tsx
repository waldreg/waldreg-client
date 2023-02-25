import Button from "../../../components/common/button";
import BoardList from "../../../components/board/BoardList";
import { useBoardList } from "../../../hooks/board/useBoardList";
import { BoardButtonContainer, BoardContainer } from "./style";
import { Params, useNavigate, useParams } from "react-router-dom";

const BoardPage = () => {
  const { categoryId } = useParams<Params>();
  const { boardList } = useBoardList(parseInt(categoryId!!), 1, 6);
  const navigate = useNavigate();

  return (
    <>
      <BoardContainer>
        {boardList && <BoardList boardList={boardList} />}
      </BoardContainer>
      <BoardButtonContainer>
        <Button onClick={() => navigate("create")}>작성</Button>
      </BoardButtonContainer>
    </>
  );
};

export default BoardPage;
