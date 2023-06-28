import styled from "styled-components";
import COLOR from "../../../constants/color";

const CommentInput = styled.input`
  width: 100%;
  padding: 1rem;
  outline: none;
  border: 2px solid ${COLOR.GRAY0};
  border-radius: 0.5rem;
  margin-top: 0.7rem;
`;

const CommentLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    position: absolute;
    right: 0.5rem;
    top: 1.2rem;
  }
`;

export { CommentInput, CommentLabel };
