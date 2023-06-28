import { useNavigate, useParams } from "react-router-dom";
import BoardList from "../../../components/board/BoardList";
import Button from "../../../components/common/button";
import { useBoardList } from "../../../hooks/board/useBoardList";
import { BoardButtonContainer, PaginationBox } from "./style";
import Container from "../../../components/common/container";
import Pagination from "../../../components/common/pagination";
import { useState } from "react";
import { LeftIcon, RightIcon } from "../../../components/Icons/BoardIcons";
import BoardSearchButton from "../../../components/board/BoardSearchButton";

const BoardPage = () => {
  const { categoryId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = currentPage * itemsPerPage;

  const { boardList } = useBoardList(
    parseInt(categoryId!!),
    startItem,
    endItem,
    currentPage
  );

  let itemsCount = boardList?.max_idx;
  if (!itemsCount) itemsCount = 1;

  const navigate = useNavigate();
  const handleCreateButtonClick = () => {
    navigate("create");
  };

  const handleSearchButtonClick = () => {
    navigate("/board/search");
  };

  return (
    <>
      <Container
        height={"82%"}
        style={{
          margin: "0.6rem 0",
          padding: "1rem 2rem",
          justifyContent: "flex-start",
        }}
      >
        {boardList && <BoardList boardList={boardList} />}
      </Container>
      <PaginationBox>
        <LeftIcon
          disable={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        />
        <Pagination
          pageNumber={itemsCount!! / 6}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <RightIcon
          disable={currentPage === Math.ceil(itemsCount!! / 6)}
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        />
      </PaginationBox>
      <BoardButtonContainer>
        <BoardSearchButton onClick={handleSearchButtonClick} />
        <Button onClick={handleCreateButtonClick}>글 작성하기</Button>
      </BoardButtonContainer>
    </>
  );
};

export default BoardPage;
