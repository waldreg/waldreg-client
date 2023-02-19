import styled from "styled-components";
import COLOR from "../../../constants/color";

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
  margin-bottom: 1rem;
`;

const SettingButton = styled.button`
  color: ${COLOR.GREEN4};
`;

const CategoryListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  SettingContainer,
  SettingTop,
  SettingTitle,
  SettingInput,
  SettingButton,
  CategoryListBox,
};
