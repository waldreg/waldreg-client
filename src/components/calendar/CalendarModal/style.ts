import styled from "styled-components";
import COLOR from "../../../constants/color";

const DialogBox = styled.dialog`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  min-width: 25rem;
  height: 70%;
  min-height: 30rem;
  padding: 4rem;
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0 0 3rem rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 3;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const DialogButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DialogButton = styled.button`
  width: 100%;
  height: 3rem;
  margin: 0 0.3rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${COLOR.GRAY1};
`;

export { DialogBox, Backdrop, DialogButtonBox, DialogButton };
