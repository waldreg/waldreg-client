import styled from "styled-components";
import COLOR from "../../../constants/color";

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  background: ${COLOR.WHITE};
  width: 100%;
  padding: 2rem;
  margin: 1rem 0;
`;

const BoardButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { BoardContainer, BoardButtonContainer };
