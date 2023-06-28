import styled from "styled-components";
import COLOR from "../../../constants/color";

const BoardList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${COLOR.GRAY1};
  border-radius: 0.5rem;
  width: 5rem;
  height: 2.2rem;
`;

const BoardListText = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 500;
  margin-left: 0.5rem;
`;

export { BoardList, BoardListText };
