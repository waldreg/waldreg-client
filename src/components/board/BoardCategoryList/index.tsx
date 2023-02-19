import { useSetRecoilState } from "recoil";
import { useBoardCategoryDelete } from "../../../hooks/board/category/useBoardCategoryDelete";
import { BoardCategoryLists } from "../../../interfaces/board";
import {
  settingCategoryId,
  settingCategoryName,
  settingFromState,
} from "../../../states/board";
import FONT from "./../../../constants/fonts";
import {
  Category,
  CategoryButton,
  CategoryButtonBox,
  CategoryTitle,
} from "./style";

interface BoardCategoryListsProps {
  boardCategoryList: BoardCategoryLists;
}

function BoardCategoryList({ boardCategoryList }: BoardCategoryListsProps) {
  const setCategoryName = useSetRecoilState(settingCategoryName);
  const setCategoryId = useSetRecoilState(settingCategoryId);
  const setSettingForm = useSetRecoilState(settingFromState);

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
                setSettingForm((prev) => !prev);
                setCategoryId(category.category_id!);
                setCategoryName(category.category_name);
              }}
              style={FONT.SUBTITLE2}
            >
              수정
            </CategoryButton>
          </CategoryButtonBox>
        </Category>
      ))}
    </>
  );
}

export default BoardCategoryList;
