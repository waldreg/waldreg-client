import styled from "styled-components";
import COLOR from "../../../constants/color";

const CalendarContainer = styled.div`
  background: ${COLOR.WHITE};
  width: 100%;
  padding: 1.8rem 2rem;
  min-width: 45rem;
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

const CalendarOptionIcon = styled.div`
  display: flex;
  justify-content: right;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  padding: 1rem;
`;

const CalendarOptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  background: ${COLOR.WHITE};
  top: 3.2rem;
  right: 0.5rem;
  z-index: 1;
  box-shadow: 0 0 0 1px ${COLOR.GRAY2};
  border-radius: 0.2rem;
`;

const CalendarOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.5rem;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: ${COLOR.GRAY1};
    transition: 0.2s;
  }
`;

export {
  CalendarContainer,
  CalendarTitleInput,
  CalendarContentTextarea,
  CalendarOptionIcon,
  CalendarOptionBox,
  CalendarOption,
};
