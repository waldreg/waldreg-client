import styled from "styled-components";
import COLOR from "../../../constants/color";

const PageButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0.5rem;
`;

const PageButton = styled.button<{ isCurrentPage: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 0.7rem;
  background: ${(props) => (props.isCurrentPage ? COLOR.GREEN4 : COLOR.WHITE)};
  color: ${(props) => (props.isCurrentPage ? COLOR.WHITE : COLOR.GREEN4)};
  margin: 0 0.2rem;
`;

export { PageButtonBox, PageButton };
