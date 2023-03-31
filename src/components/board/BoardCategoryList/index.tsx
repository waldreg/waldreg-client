import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { BoardCategoryLists } from "../../../interfaces/board";
import { settingCategoryId, settingCategoryName } from "../../../states/board";
import FONT from "./../../../constants/fonts";
import { Category, CategoryTitle, SettingBlank } from "./style";
import { Item } from "../../character/CharacterList/style";
import { useBoardCategoryDelete } from "../../../hooks/board/category/useBoardCategoryDelete";
import Modal from "../../common/modal";
import {
  CategoryDeleteContent,
  CategoryDeleteSpan,
  SettingButtonBox,
  SettingCancelButton,
  SettingSaveButton,
  SettingTitle,
} from "../../../routes/Setting/Board/style";
import { TrashcanIcon } from "../../Icons/SettingIcons";

interface BoardCategoryListsProps {
  boardCategoryList: BoardCategoryLists;
}

function BoardCategoryList({ boardCategoryList }: BoardCategoryListsProps) {
  const [categoryId, setCategoryId] = useRecoilState(settingCategoryId);
  const [categoryName, setCategoryName] = useRecoilState(settingCategoryName);

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const categoryDelete = useBoardCategoryDelete();

  const handleDeleteCategory = () => {
    categoryDelete.mutate(categoryId);
    setIsOpenDeleteModal(false);
  };

  const handleClickDeleteModal = useCallback(() => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  }, [isOpenDeleteModal]);

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
                <div onClick={handleClickDeleteModal}>
                  <TrashcanIcon />
                </div>
              </Category>
            </Item>
            <SettingBlank />
          </>
        );
      })}

      {isOpenDeleteModal && (
        <Modal onClickToggleModal={handleClickDeleteModal} size={"small"}>
          <SettingTitle style={FONT.HEADING}>게시판 삭제</SettingTitle>
          <CategoryDeleteContent style={FONT.SUBTITLE2}>
            <CategoryDeleteSpan>{categoryName}</CategoryDeleteSpan> 게시판을
            삭제하시겠습니까?
          </CategoryDeleteContent>
          <SettingButtonBox>
            <SettingCancelButton
              style={FONT.SUBTITLE2}
              onClick={handleClickDeleteModal}
            >
              취소
            </SettingCancelButton>
            <SettingSaveButton
              style={FONT.SUBTITLE2}
              onClick={handleDeleteCategory}
            >
              확인
            </SettingSaveButton>
          </SettingButtonBox>
        </Modal>
      )}
    </>
  );
}

export default BoardCategoryList;
