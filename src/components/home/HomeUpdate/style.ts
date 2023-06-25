import styled from "styled-components";
import COLOR from "../../../constants/color";

const HomeTextarea = styled.textarea`
  height: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  outline-color: ${COLOR.GRAY0};
  resize: none;
  scrollbar-height: none;
  overflow: auto;
`;

const CharacterCount = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.5rem;
`;

export { HomeTextarea, CharacterCount };
