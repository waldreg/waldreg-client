import COLOR from "../../../constants/color";
import FONT from "../../../constants/fonts";
import { BoardCategoryLists } from "../../../interfaces/board";
import { Blank, Item, Text, Link } from "../../global/NavBar/style";

interface BoardCategoryProps {
  boardCategoryList: BoardCategoryLists;
}

function BoardCategory({ boardCategoryList }: BoardCategoryProps) {
  return (
    <ul
      className="relative accordion-collapse collapse"
      id="collapseSideNav2"
      aria-labelledby="SideNav2"
      data-bs-parent="#sidenavSecExample"
    >
      {boardCategoryList.categories.map((category) => {
        return (
          <Item className="relative" key={category.category_id}>
            <Link
              to={`board/${category.category_id}`}
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color={COLOR.GREEN4}
            >
              <Blank />
              <Text style={FONT.BODY1}>{category.category_name}</Text>
            </Link>
          </Item>
        );
      })}
    </ul>
  );
}

export default BoardCategory;
