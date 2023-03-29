import styled from "styled-components";
import COLOR from "../../../constants/color";

type CalendarCellsProps = {
  isWeekend: boolean;
  isToday: boolean;
  isWithinMonth: boolean;
};

const CalendarCell = styled.div<CalendarCellsProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  border: 1px solid ${COLOR.GRAY1};
  padding: 0.5rem;
  font-size: 0.9rem;
  background-color: ${(props) =>
    props.isWeekend ? COLOR.GRAY0 : "transparent"};
  color: ${(props) =>
    (props.isToday && COLOR.WHITE) || (!props.isWithinMonth && COLOR.GRAY2)};
  position: relative;
  z-index: 1;

  &::before {
    display: ${(props) => (props.isToday ? "block" : "none")};
    content: "";
    z-index: -1;
    position: absolute;
    top: 21.5%;
    right: 1.5%;
    transform: translateY(-50%);
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background-color: ${COLOR.GREEN4};
  }
`;

const CalendarRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 5rem;
`;

const CalendarPlusButton = styled.div`
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.15rem;
  color: ${COLOR.GREEN4};
  width: 1.6rem;
  height: 1.6rem;
  top: 6%;
  left: 5%;
  position: absolute;
  cursor: pointer;
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GREEN4};
  border-radius: 0.4rem;
  display: block;
`;

const CalendarTitleInput = styled.input`
  width: 100%;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const CalendarContentTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  font-weight: 400;
  resize: none;
  border: none;
  outline: none;
  padding: 0;
`;

export {
  CalendarCell,
  CalendarRow,
  CalendarPlusButton,
  CalendarTitleInput,
  CalendarContentTextarea,
};
