import styled from "styled-components";
import COLOR from "../../../constants/color";

const BoardTitleInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 2px solid ${COLOR.GRAY0};
  margin-bottom: 1rem;
`;

const BoardContentTextArea = styled.textarea`
  width: 100%;
  height: 18rem;
  border-radius: 0.5rem;
  border: 2px solid ${COLOR.GRAY0};
  padding: 1rem;
  resize: none;
  margin-bottom: 1rem;
  overflow: auto;
`;

const BoardButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BoardCreateButton = styled.button`
  background: ${COLOR.GREEN4};
  color: ${COLOR.WHITE};
  border-radius: 0.5rem;
  width: 4.4rem;
  height: 2.5rem;
  border: none;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  BoardTitleInput,
  BoardContentTextArea,
  BoardButtonContainer,
  BoardCreateButton,
};
