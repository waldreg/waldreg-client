import { useLocation } from "react-router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { BoardCategoryLists } from "../../../interfaces/board";
import {
  settingCategoryId,
  settingCategoryName,
  settingFromState,
} from "../../../states/board";
import { Item, Link } from "../../global/NavBar/style";
import FONT from "./../../../constants/fonts";
import { Category, CategoryButton, CategoryTitle } from "./style";

interface BoardCategoryListsProps {
  boardCategoryList: BoardCategoryLists;
}

function BoardCategoryList({ boardCategoryList }: BoardCategoryListsProps) {
  const setCategoryName = useSetRecoilState(settingCategoryName);
  const [categoryId, setCategoryId] = useRecoilState(settingCategoryId);
  const setSettingForm = useSetRecoilState(settingFromState);

  const location = useLocation().pathname;

  return (
    <>
      {boardCategoryList.categories.map((category) => {
        return (
          <Item className="relative" key={category.category_id}>
            <Link
              to={`/setting/board`}
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded transition duration-300 ease-in-out"
              selected={location === `/setting/board/${categoryId}`}
            >
              <Category>
                <CategoryTitle style={FONT.SUBTITLE2}>
                  {category.category_name}
                </CategoryTitle>
                <CategoryButton
                  onClick={() => {
                    setSettingForm((prev) => !prev);
                    setCategoryId(category.category_id!);
                    setCategoryName(category.category_name);
                  }}
                  style={FONT.SUBTITLE2}
                >
                  수정
                </CategoryButton>
              </Category>
            </Link>
          </Item>
        );
      })}
    </>
  );
}

export default BoardCategoryList;
