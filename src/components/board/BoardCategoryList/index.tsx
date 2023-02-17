import { useCallback, useState } from "react";
import { useBoardCategoryDelete } from "../../../hooks/board/category/useBoardCategoryDelete";
import { useBoardCategoryUpdate } from "../../../hooks/board/category/useBoardCategoryUpdate";
import { BoardCategoryLists } from "../../../interfaces/board";
import Modal from "../../common/modal";

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
        <div key={category.category_id}>
          {category.category_name}
          <button
            onClick={() => {
              onClickUpdateModal();
              setCategoryId(category.category_id!);
              setCategoryName(category.category_name);
            }}
          >
            수정
          </button>
          <button onClick={() => categoryDelete.mutate(category.category_id!)}>
            삭제
          </button>
        </div>
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

export default BoardCategoryList;
