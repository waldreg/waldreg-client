import styled from "styled-components";

const DialogBox = styled.dialog`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 36rem;
  height: 20rem;
  padding: 5rem;
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

export { DialogBox, Backdrop };
