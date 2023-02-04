import { BoardCategories } from "../../../interfaces/category";

interface BoardCategoriesProps {
  categories: BoardCategories[];
}

const BoardCategory = ({ categories }: BoardCategoriesProps) => {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.category_id}>
          <div>{category.category_name}</div>
        </div>
      ))}
    </div>
  );
};

export default BoardCategory;
