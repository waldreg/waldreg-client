import styled from "styled-components";
import COLOR from "../../../constants/color";

const HomeTextarea = styled.textarea`
  width: 100%;
  height: 28rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  outline-color: ${COLOR.GRAY0};
  margin-bottom: 1rem;
  resize: none;
  scrollbar-width: none;
`;

export { HomeTextarea };
