import React, { useState } from "react";
import styled from "styled-components";
import BoardCategoryList from "../../../components/board/BoardCategoryList";
import { useBoardCategoryCreate } from "../../../hooks/board/useBoardCategoryCreate";
import { useBoardCategoryList } from "../../../hooks/board/useBoardCategoryList";
import { Container } from "../../Board/BoardLayout/style";

const BoardManagement = () => {
  const [boardName, setBoardName] = useState<string>("");

  const createMutation = useBoardCategoryCreate(boardName);

  const handleCreateCategory = () => {
    createMutation.mutate();
    setBoardName("");
  };

  const { boardCategoryList } = useBoardCategoryList();

  return (
    <>
      <Container>
        <div>게시판관리</div>
        <input
          type="text"
          value={boardName}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setBoardName(e.currentTarget.value)
          }
        />
        <button onClick={handleCreateCategory}>게시판 생성</button>

        <CategoryListBox>
          {boardCategoryList && (
            <BoardCategoryList boardCategoryList={boardCategoryList} />
          )}
        </CategoryListBox>
      </Container>
    </>
  );
};

const CategoryListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default BoardManagement;
