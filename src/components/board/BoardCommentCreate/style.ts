import styled from "styled-components";
import COLOR from "../../../constants/color";

const CommentInput = styled.input`
  width: 100%;
  padding: 1rem;
  outline: none;
  border: 2px solid ${COLOR.GRAY0};
  border-radius: 0.5rem;
  margin: 1rem 0 1.5rem;
`;

const CommentLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    right: 1rem;
    top: 26.5%;
  }
`;

export { CommentInput, CommentLabel };
