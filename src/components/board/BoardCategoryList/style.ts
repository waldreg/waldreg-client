import styled from "styled-components";
import COLOR from "../../../constants/color";

const Category = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0;
`;

const CategoryTitle = styled.div`
  color: ${COLOR.GRAY3};
`;

const CategoryButton = styled.button`
  color: ${COLOR.GREEN4};
`;

const SettingBlank = styled.div`
  height: 10px;
`;

export { Category, CategoryTitle, CategoryButton, SettingBlank };
