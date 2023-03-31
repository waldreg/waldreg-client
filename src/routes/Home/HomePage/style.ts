import styled from "styled-components";
import COLOR from "../../../constants/color";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
  background: ${COLOR.WHITE};
  width: 100%;
  height: 85%;
  padding: 2rem;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { HomeContainer, ButtonContainer };
