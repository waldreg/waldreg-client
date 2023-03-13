import React, { useCallback, useState } from "react";
import BoardCategoryList from "../../../components/board/BoardCategoryList";
import { PlusIcon } from "../../../components/Icons/SettingIcons";
import { useBoardCategoryCreate } from "../../../hooks/board/category/useBoardCategoryCreate";
import { useBoardCategoryList } from "../../../hooks/board/category/useBoardCategoryList";
import FONT from "./../../../constants/fonts";
import Modal from "../../../components/common/modal";
import {
  settingCategoryId,
  settingCategoryName,
} from "./../../../states/board";
import {
  CategoryDeleteButton,
  CategoryDeleteContent,
  CategoryDeleteSpan,
  CategoryListBox,
  SettingButtonBox,
  SettingCancelButton,
  SettingContainer,
  SettingFormContainer,
  SettingInput,
  SettingSaveButton,
  SettingTitle,
  SettingTop,
} from "./style";
import { useRecoilState, useRecoilValue } from "recoil";
import { useBoardCategoryUpdate } from "../../../hooks/board/category/useBoardCategoryUpdate";
import { useBoardCategoryDelete } from "../../../hooks/board/category/useBoardCategoryDelete";

const BoardManagement = () => {
  const [boardName, setBoardName] = useState<string>("");
  const { boardCategoryList } = useBoardCategoryList();

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const categoryId = useRecoilValue(settingCategoryId);
  const [categoryName, setCategoryName] = useRecoilState(settingCategoryName);

  const createMutation = useBoardCategoryCreate(boardName);
  const categoryUpdate = useBoardCategoryUpdate(categoryId, categoryName);
  const categoryDelete = useBoardCategoryDelete();

  const handleCreateCategory = () => {
    createMutation.mutate();
    setBoardName("");
    setIsOpenCreateModal(false);
  };

  const handleDeleteCategory = () => {
    categoryDelete.mutate(categoryId);
    setIsOpenDeleteModal(false);
  };

  const handleClickCreateModal = useCallback(() => {
    setIsOpenCreateModal(!isOpenCreateModal);
    setBoardName("");
  }, [isOpenCreateModal]);

  const handleClickDeleteModal = useCallback(() => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  }, [isOpenDeleteModal]);

  return (
    <>
      <SettingContainer style={{ width: "30%" }}>
        <SettingTop>
          <SettingTitle style={FONT.HEADING}>게시판</SettingTitle>
          <button onClick={handleClickCreateModal}>
            <PlusIcon />
          </button>
        </SettingTop>
        <CategoryListBox>
          {boardCategoryList && (
            <BoardCategoryList boardCategoryList={boardCategoryList} />
          )}
        </CategoryListBox>
      </SettingContainer>

      <SettingFormContainer style={{ width: "50%" }}>
        <div>
          <SettingTop>
            <SettingTitle style={FONT.HEADING}>설정</SettingTitle>
          </SettingTop>
          <SettingInput
            type="text"
            value={categoryName}
            style={FONT.SUBTITLE2}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setCategoryName(e.currentTarget.value)
            }
          />
        </div>
        <div>
          <CategoryDeleteButton
            style={FONT.SUBTITLE2}
            onClick={() => {
              categoryUpdate.mutate();
            }}
          >
            변경사항 저장
          </CategoryDeleteButton>
        </div>
      </SettingFormContainer>

      {isOpenCreateModal && (
        <Modal onClickToggleModal={handleClickCreateModal} size={"small"}>
          <SettingTitle style={FONT.HEADING}>게시판 추가</SettingTitle>
          <SettingInput
            type="text"
            value={boardName}
            style={FONT.SUBTITLE2}
            placeholder="게시판 이름"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setBoardName(e.currentTarget.value)
            }
          />
          <SettingButtonBox>
            <SettingCancelButton
              style={FONT.SUBTITLE2}
              onClick={handleClickCreateModal}
            >
              취소
            </SettingCancelButton>
            <SettingSaveButton
              style={FONT.SUBTITLE2}
              onClick={handleCreateCategory}
            >
              확인
            </SettingSaveButton>
          </SettingButtonBox>
        </Modal>
      )}

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
};

export default BoardManagement;
