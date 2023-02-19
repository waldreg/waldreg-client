import { useCallback, useState } from "react";
import styled from "styled-components";
import { useBoardCategoryDelete } from "../../../hooks/board/category/useBoardCategoryDelete";
import { useBoardCategoryUpdate } from "../../../hooks/board/category/useBoardCategoryUpdate";
import { BoardCategoryLists } from "../../../interfaces/board";
import Modal from "../../common/modal";
import { BoardCategory } from "./../../../interfaces/board";
import COLOR from "./../../../constants/color";
import FONT from "./../../../constants/fonts";

interface BoardCategoryListsProps {
  boardCategoryList: BoardCategoryLists;
}

function BoardCategoryList({ boardCategoryList }: BoardCategoryListsProps) {
  const [isOpenModal, setOpenModal] = useState(false);
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number>(0);

  const categoryDelete = useBoardCategoryDelete();
  const categoryUpdate = useBoardCategoryUpdate(categoryId, categoryName);

  const onClickUpdateModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      {boardCategoryList.categories.map((category) => (
        <Category key={category.category_id}>
          <CategoryTitle style={FONT.SUBTITLE2}>
            {category.category_name}
          </CategoryTitle>
          <CategoryButtonBox>
            <CategoryButton
              onClick={() => {
                onClickUpdateModal();
                setCategoryId(category.category_id!);
                setCategoryName(category.category_name);
              }}
              style={FONT.SUBTITLE2}
            >
              수정
            </CategoryButton>
            <CategoryButton
              onClick={() => categoryDelete.mutate(category.category_id!)}
              style={FONT.SUBTITLE2}
            >
              삭제
            </CategoryButton>
          </CategoryButtonBox>
        </Category>
      ))}

      <div>
        {isOpenModal && (
          <Modal onClickToggleModal={onClickUpdateModal}>
            게시판 이름 수정
            <input
              type="text"
              value={categoryName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCategoryName(e.currentTarget.value)
              }
            />
            <button onClick={() => setOpenModal(false)}>취소</button>
            <button
              onClick={() => {
                categoryUpdate.mutate();
                setOpenModal(false);
              }}
            >
              확인
            </button>
          </Modal>
        )}
      </div>
    </>
  );
}

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
`;

const CategoryTitle = styled.div`
  color: ${COLOR.GRAY3};
`;

const CategoryButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryButton = styled.button`
  margin-left: 0.5rem;
  color: ${COLOR.GREEN4};
`;

export default BoardCategoryList;
