import { useNavigate, useParams } from "react-router-dom";
import BoardList from "../../../components/board/BoardList";
import Button from "../../../components/common/button";
import { useBoardList } from "../../../hooks/board/useBoardList";
import { BoardButtonContainer } from "./style";
import Container from "../../../components/common/container";

const BoardPage = () => {
  const { categoryId } = useParams();
  const { boardList } = useBoardList(parseInt(categoryId!!), 1, 6);

  const navigate = useNavigate();
  const handleCreateButtonClick = () => {
    navigate("create");
  };

  return (
    <>
      <Container height={"default"} style={{ margin: "1rem 0" }}>
        {boardList && <BoardList boardList={boardList} />}
      </Container>
      <BoardButtonContainer>
        <Button onClick={handleCreateButtonClick}>글 작성하기</Button>
      </BoardButtonContainer>
    </>
  );
};

export default BoardPage;
