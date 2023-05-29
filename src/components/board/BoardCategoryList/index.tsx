import { useRecoilState, useSetRecoilState } from "recoil";
import { BoardCategoryLists } from "../../../interfaces/board";
import { settingCategoryId, settingCategoryName } from "../../../states/board";
import FONT from "./../../../constants/fonts";
import { Category, CategoryTitle, SettingBlank } from "./style";
import { Item } from "../../character/CharacterList/style";

interface BoardCategoryListsProps {
  boardCategoryList: BoardCategoryLists;
}

function BoardCategoryList({ boardCategoryList }: BoardCategoryListsProps) {
  const [categoryId, setCategoryId] = useRecoilState(settingCategoryId);
  const setCategoryName = useSetRecoilState(settingCategoryName);

  return (
    <>
      {boardCategoryList.categories.map((category) => {
        return (
          <>
            <Item
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
              key={category.category_id}
              onClick={() => {
                setCategoryId(category.category_id!);
                setCategoryName(category.category_name);
              }}
              selected={category.category_id === categoryId}
            >
              <Category>
                <CategoryTitle style={FONT.SUBTITLE2}>
                  {category.category_name}
                </CategoryTitle>
              </Category>
            </Item>
            <SettingBlank />
          </>
        );
      })}
    </>
  );
}

export default BoardCategoryList;
