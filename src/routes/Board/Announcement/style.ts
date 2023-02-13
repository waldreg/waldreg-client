import styled from "styled-components";
import COLOR from "../../../constants/color";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 1.5rem;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  background: ${COLOR.WHITE};
  width: 100%;
  padding: 1.5rem;
  margin: 1.4rem 0;
`;

const BoardButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { Container, BoardContainer, BoardButtonContainer };
