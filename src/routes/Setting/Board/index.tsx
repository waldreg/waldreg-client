import React, { useState } from "react";
import styled from "styled-components";
import BoardCategoryList from "../../../components/board/BoardCategoryList";
import { PlusIcon } from "../../../components/Icons/SettingIcons";
import { useBoardCategoryCreate } from "../../../hooks/board/category/useBoardCategoryCreate";
import { useBoardCategoryList } from "../../../hooks/board/category/useBoardCategoryList";
import COLOR from "./../../../constants/color";
import PageTitle from "./../../../components/common/pagetitle/index";
import FONT from "./../../../constants/fonts";

const BoardManagement = () => {
  const [boardName, setBoardName] = useState<string>("");
  const createMutation = useBoardCategoryCreate(boardName);

  const handleCreateCategory = () => {
    createMutation.mutate();
    setBoardName("");
    setSettingForm(false);
  };

  const { boardCategoryList } = useBoardCategoryList();
  const [settingForm, setSettingForm] = useState(false);

  return (
    <>
      <SettingContainer style={{ width: "30%" }}>
        <SettingTop>
          <SettingTitle style={FONT.HEADING}>게시판</SettingTitle>
          <button onClick={() => setSettingForm((prev) => !prev)}>
            <PlusIcon />
          </button>
        </SettingTop>
        <CategoryListBox>
          {boardCategoryList && (
            <BoardCategoryList boardCategoryList={boardCategoryList} />
          )}
        </CategoryListBox>
      </SettingContainer>

      {settingForm && (
        <SettingContainer style={{ width: "50%" }}>
          <SettingTop>
            <SettingTitle style={FONT.HEADING}>설정</SettingTitle>
            <SettingButton
              style={FONT.SUBTITLE2}
              onClick={handleCreateCategory}
            >
              저장
            </SettingButton>
          </SettingTop>
          <SettingInput
            type="text"
            value={boardName}
            style={FONT.SUBTITLE2}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setBoardName(e.currentTarget.value)
            }
          />
        </SettingContainer>
      )}
    </>
  );
};

const SettingContainer = styled.div`
  height: 100%;
  background: ${COLOR.WHITE};
  padding: 2rem;
  border-radius: 1rem;
`;

const SettingTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const SettingTitle = styled.div`
  color: ${COLOR.BLACK};
`;

const SettingInput = styled.input`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid ${COLOR.GRAY0};
`;

const SettingButton = styled.button`
  color: ${COLOR.GREEN4};
`;

const CategoryListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export default BoardManagement;
