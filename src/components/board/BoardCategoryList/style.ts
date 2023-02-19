import styled from "styled-components";
import COLOR from "../../../constants/color";

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 0;
  margin: 0.3rem 0;
`;

const CategoryTitle = styled.div`
  color: ${COLOR.GRAY3};
`;

const CategoryButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryButton = styled.button`
  margin-left: 0.5rem;
  color: ${COLOR.GREEN4};
`;

export { Category, CategoryTitle, CategoryButtonBox, CategoryButton };
