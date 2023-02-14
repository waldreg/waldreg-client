import { BoardCategoryLists } from "../../../interfaces/board";
import { Category } from "./style";

interface BoardCategoryProps {
  boardCategoryList: BoardCategoryLists;
}

function BoardCategory({ boardCategoryList }: BoardCategoryProps) {
  return (
    <Category>
      {boardCategoryList.categories.map((category) => (
        <div key={category.category_id} style={{ marginBottom: "2.5rem" }}>
          {category.category_name}
        </div>
      ))}
    </Category>
  );
}

export default BoardCategory;
