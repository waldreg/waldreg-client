import styled from "styled-components";
import COLOR from "../../constants/color";

const Container = styled.div`
  background: ${COLOR.GRAY1};
  height: 100vh;
  width: 100%;
  padding: 2.2rem;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  background: ${COLOR.WHITE};
  width: 100%;
  padding: 1.5rem 1.5rem 0.5rem;
  margin: 1.4rem 0;
`;

const BoardButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { Container, BoardContainer, BoardButtonContainer };
