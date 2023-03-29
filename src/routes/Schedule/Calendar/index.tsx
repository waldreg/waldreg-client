import { useState } from "react";
import { format, addMonths, subMonths, getDay, isSameDay } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { addDays } from "date-fns";
import {
  CalendarCell,
  CalendarCells,
  CalendarContainer,
  CalendarDate,
  CalendarHeader,
  CalendarHeaderArrow,
  CalendarHeaderLeft,
  CalendarHeaderRight,
  CalendarToday,
} from "./style";
import FONT from "../../../constants/fonts";

type RenderHeaderProps = {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
  today: () => void;
};

const RenderHeader = ({
  currentMonth,
  prevMonth,
  nextMonth,
  today,
}: RenderHeaderProps) => {
  return (
    <CalendarHeader>
      <CalendarHeaderLeft>
        <span style={FONT.BODY1}>{format(currentMonth, "yyyy")}년</span>
        <span style={FONT.BODY1}>{format(currentMonth, "M")}월</span>
      </CalendarHeaderLeft>
      <CalendarHeaderRight>
        <CalendarHeaderArrow style={FONT.BODY1} onClick={prevMonth}>
          &lt;
        </CalendarHeaderArrow>
        <CalendarToday style={FONT.BODY1} onClick={today}>
          오늘
        </CalendarToday>
        <CalendarHeaderArrow style={FONT.BODY1} onClick={nextMonth}>
          &gt;
        </CalendarHeaderArrow>
      </CalendarHeaderRight>
    </CalendarHeader>
  );
};

const RenderDays = () => {
  const days = [];
  const date = ["일", "월", "화", "수", "목", "금", "토"];
  for (let i = 0; i < 7; i++) {
    days.push(<div key={i}>{date[i]}</div>);
  }
  return <CalendarDate>{days}</CalendarDate>;
};

type RenderCellsProps = {
  currentMonth: Date;
};

const RenderCells = ({ currentMonth }: RenderCellsProps) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(
        <CalendarCells
          key={i}
          isWeekend={getDay(day) === 0 || getDay(day) === 6}
          isToday={isSameDay(day, new Date())}
        >
          {format(day, "d")}
        </CalendarCells>
      );
      day = addDays(day, 1);
    }
    rows.push(<CalendarCell key={rows.length}>{days}</CalendarCell>);
    days = [];
  }
  return <div>{rows}</div>;
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const handleTodayClick = () => {
    setCurrentMonth(new Date());
  };

  return (
    <CalendarContainer>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        today={handleTodayClick}
      />
      <RenderDays />
      <RenderCells currentMonth={currentMonth} />
    </CalendarContainer>
  );
};

export default Calendar;
