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
  settingFromState,
} from "./../../../states/board";
import {
  CategoryListBox,
  SettingButton,
  SettingContainer,
  SettingInput,
  SettingTitle,
  SettingTop,
} from "./style";
import { useRecoilState, useRecoilValue } from "recoil";
import { useBoardCategoryUpdate } from "../../../hooks/board/category/useBoardCategoryUpdate";

const BoardManagement = () => {
  const [boardName, setBoardName] = useState<string>("");
  const createMutation = useBoardCategoryCreate(boardName);

  const { boardCategoryList } = useBoardCategoryList();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [settingForm, setSettingForm] = useRecoilState(settingFromState);

  const categoryId = useRecoilValue(settingCategoryId);
  const [categoryName, setCategoryName] = useRecoilState(settingCategoryName);

  const categoryUpdate = useBoardCategoryUpdate(categoryId, categoryName);

  const handleCreateCategory = () => {
    createMutation.mutate();
    setBoardName("");
    setIsOpenModal(false);
  };

  const handleClickCreateModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

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

      {isOpenModal && (
        <Modal onClickToggleModal={handleClickCreateModal}>
          <SettingTitle>게시판 생성</SettingTitle>
          <SettingInput
            type="text"
            value={boardName}
            style={FONT.SUBTITLE2}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setBoardName(e.currentTarget.value)
            }
          />
          <SettingButton style={FONT.SUBTITLE2} onClick={handleCreateCategory}>
            저장
          </SettingButton>
        </Modal>
      )}

      {settingForm && (
        <SettingContainer style={{ width: "50%" }}>
          <SettingTop>
            <SettingTitle style={FONT.HEADING}>설정</SettingTitle>
            <SettingButton
              style={FONT.SUBTITLE2}
              onClick={() => {
                categoryUpdate.mutate();
                setSettingForm((prev) => !prev);
              }}
            >
              변경사항 저장
            </SettingButton>
          </SettingTop>
          <SettingInput
            type="text"
            value={categoryName}
            style={FONT.SUBTITLE2}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setCategoryName(e.currentTarget.value)
            }
          />
        </SettingContainer>
      )}
    </>
  );
};

export default BoardManagement;
