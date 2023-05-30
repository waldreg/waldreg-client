import styled from "styled-components";

const CalendarBox = styled.div`
  height: 100%;
`;

const CalendarTitleInput = styled.input`
  width: 100%;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CalendarContentTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  font-weight: 400;
  resize: none;
  border: none;
  outline: none;
  padding: 0;
  margin-top: 2rem;
`;

const CalendarDeleteButton = styled.div`
  display: flex;
  justify-content: right;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  padding: 1rem;
`;

export {
  CalendarBox,
  CalendarTitleInput,
  CalendarContentTextarea,
  CalendarDeleteButton,
};
