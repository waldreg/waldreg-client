import { useLocation } from "react-router";
import FONT from "../../../constants/fonts";
import { BoardCategoryLists } from "../../../interfaces/board";
import { Blank, Items, Item, Text, Link } from "../../global/NavBar/style";

interface BoardCategoryProps {
  boardCategoryList: BoardCategoryLists;
}

function BoardCategory({ boardCategoryList }: BoardCategoryProps) {
  const location = useLocation();

  return (
    <Items
      className="relative accordion-collapse collapse"
      id="collapseSidenavSecEx4"
      aria-labelledby="sidenavSecEx4"
      data-bs-parent="#sidenavSecExample"
    >
      {boardCategoryList.categories.map((category) => {
        return (
          <Item className="relative" key={category.category_id}>
            <Link
              to={`board/${category.category_id}`}
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out"
              selected={location.pathname.startsWith(
                `/board/${category.category_id}`
              )}
            >
              <Blank />
              <Text style={FONT.BODY1}>{category.category_name}</Text>
            </Link>
          </Item>
        );
      })}
    </Items>
  );
}

export default BoardCategory;
