import { useNavigate, useParams } from "react-router-dom";
import BoardList from "../../../components/board/BoardList";
import Button from "../../../components/common/button";
import { useBoardList } from "../../../hooks/board/useBoardList";
import { BoardButtonContainer, BoardContainer } from "./style";

const BoardPage = () => {
  const { categoryId } = useParams();
  const { boardList } = useBoardList(parseInt(categoryId!!), 1, 6);

  const navigate = useNavigate();
  const handleCreateButtonClick = () => {
    navigate("create");
  };

  return (
    <>
      <BoardContainer>
        {boardList && <BoardList boardList={boardList} />}
      </BoardContainer>
      <BoardButtonContainer>
        <Button onClick={handleCreateButtonClick}>글 작성하기</Button>
      </BoardButtonContainer>
    </>
  );
};

export default BoardPage;
