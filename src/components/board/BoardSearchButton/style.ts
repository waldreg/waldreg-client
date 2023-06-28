import styled from "styled-components";
import COLOR from "../../../constants/color";

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  color: ${COLOR.WHITE};
  background: ${COLOR.GREEN4};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const SearchText = styled.div`
  margin-left: 0.5rem;
`;

export { SearchButton, SearchText };
