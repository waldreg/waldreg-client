import { useBoardCategoryDelete } from "../../../hooks/board/useBoardCategoryDelete";
import { BoardCategoryLists } from "../../../interfaces/board";

interface BoardCategoryListsProps {
  boardCategoryList: BoardCategoryLists;
}

function BoardCategoryList({ boardCategoryList }: BoardCategoryListsProps) {
  const categoryDelete = useBoardCategoryDelete();

  return (
    <>
      {boardCategoryList.categories.map((category) => (
        <div key={category.category_id}>
          {category.category_name}
          <button onClick={() => categoryDelete.mutate(category.category_id!)}>
            삭제
          </button>
        </div>
      ))}
    </>
  );
}

export default BoardCategoryList;
