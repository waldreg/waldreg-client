import COLOR from "../../constants/color";
import FONT from "../../constants/fonts";
import styled from "styled-components";

const Error = () => {
  return (
    <ErrorContainer>
      <h1 style={FONT.HEADING}>404</h1>
      <p>Page not found</p>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  color: ${COLOR.GRAY4};
`;

export default Error;
