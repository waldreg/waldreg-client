import styled from "styled-components";
import COLOR from "../../../constants/color";

const CalendarContainer = styled.div`
  background: ${COLOR.WHITE};
  width: 100%;
  height: 100%;
  padding: 2rem;
  min-width: 45rem;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CalendarHeaderLeft = styled.div`
  display: flex;
  span {
    margin-right: 0.3rem;
  }
`;

const CalendarToday = styled.span`
  cursor: pointer;
`;

const CalendarHeaderRight = styled.div``;

const CalendarHeaderArrow = styled.span`
  cursor: pointer;
  margin: 0 0.5rem;
`;

const CalendarDate = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.7rem;
  color: ${COLOR.GRAY3};
  font-size: 0.9rem;
`;

type CalendarCellsProps = {
  isWeekend: boolean;
  isToday: boolean;
};

const CalendarCells = styled.div<CalendarCellsProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  border: 1px solid ${COLOR.GRAY1};
  padding: 0.5rem;
  font-size: 0.9rem;
  background-color: ${(props) =>
    props.isWeekend ? COLOR.GRAY0 : "transparent"};
  color: ${(props) => props.isToday && COLOR.WHITE};
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

const CalendarCell = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 5rem;
`;

export {
  CalendarContainer,
  CalendarHeader,
  CalendarHeaderLeft,
  CalendarHeaderRight,
  CalendarHeaderArrow,
  CalendarToday,
  CalendarDate,
  CalendarCells,
  CalendarCell,
};
