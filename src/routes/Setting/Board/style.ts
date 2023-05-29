import styled from "styled-components";
import COLOR from "../../../constants/color";

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
  height: 2.5rem;
  border-bottom: 1px solid ${COLOR.GRAY0};
  margin: 3rem 0;
`;

const SettingButton = styled.button`
  color: ${COLOR.GREEN4};
`;

const SettingButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SettingCancelButton = styled.button`
  background: ${COLOR.GRAY2};
  color: ${COLOR.WHITE};
  width: 50%;
  padding: 0.7rem 0;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;

const SettingSaveButton = styled.button`
  background: ${COLOR.GREEN4};
  color: ${COLOR.WHITE};
  width: 50%;
  padding: 0.7rem 0;
  border-radius: 0.5rem;
`;

const CategoryListBox = styled.div`
  height: 100%;
`;

const CategoryDeleteButton = styled.button`
  background: ${COLOR.GREEN4};
  color: ${COLOR.WHITE};
  width: 100%;
  padding: 0.7rem 0;
  border-radius: 0.5rem;
`;

const CategoryDeleteText = styled.div`
  color: ${COLOR.GREEN4};
  cursor: pointer;
`;

const CategoryDeleteContent = styled.div`
  color: ${COLOR.GRAY5};
`;

const CategoryDeleteSpan = styled.span`
  color: ${COLOR.GREEN4};
`;

export {
  SettingTop,
  SettingTitle,
  SettingInput,
  SettingButton,
  SettingButtonBox,
  SettingCancelButton,
  SettingSaveButton,
  CategoryListBox,
  CategoryDeleteButton,
  CategoryDeleteContent,
  CategoryDeleteText,
  CategoryDeleteSpan,
};
