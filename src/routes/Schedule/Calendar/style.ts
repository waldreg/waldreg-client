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

export { CalendarContainer, CalendarTitleInput, CalendarContentTextarea };
