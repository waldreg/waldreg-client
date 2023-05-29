import styled from "styled-components";
import COLOR from "../../../constants/color";

type CalendarCellsProps = {
  isWeekend: boolean;
  isWithinMonth: boolean;
};

const CalendarCell = styled.div<CalendarCellsProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  border: 1px solid ${COLOR.GRAY1};
  padding: 0.5rem;
  font-size: 0.9rem;
  background-color: ${(props) =>
    props.isWeekend ? COLOR.GRAY0 : "transparent"};
`;

const CalendarDay = styled.div<{ isToday: boolean }>`
  ${(props) =>
    props.isToday &&
    ` width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background: #EB5757;
      color: ${COLOR.WHITE};
      text-align: center;
      line-height: 1.5rem;`}
`;

const Calendar = styled.div<{ height: string }>`
  height: ${(props) => props.height};
`;

const CalendarRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const CalendarPlusButton = styled.div`
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.15rem;
  color: ${COLOR.GREEN4};
  width: 1.6rem;
  height: 1.6rem;
  top: 6%;
  left: 6%;
  position: absolute;
  cursor: pointer;
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GREEN4};
  border-radius: 0.4rem;
  display: block;
`;

const ScheduleBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  bottom: 0.1rem;
  left: 0.1rem;
  right: 0.1rem;
  color: ${COLOR.BLACK};
`;

const Schedule = styled.div`
  background: ${COLOR.GREEN3};
  padding: 0 0.1rem;
  border-radius: 0.2rem;
  bottom: 0;
  font-size: 0.6rem;
  margin-top: 0.1rem;
  cursor: pointer;
`;

export {
  Calendar,
  CalendarDay,
  CalendarCell,
  CalendarRow,
  CalendarPlusButton,
  ScheduleBox,
  Schedule,
};
