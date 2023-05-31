import { Blank, Item, Items, Link, Text } from "../../global/NavBar/style";

import { BoardCategoryLists } from "../../../interfaces/board";
import FONT from "../../../constants/fonts";
import { useLocation } from "react-router";

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
