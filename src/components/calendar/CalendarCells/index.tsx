import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useState } from "react";
import { CalendarCell, CalendarPlusButton, CalendarRow } from "./style";

type CalendarCellsProps = {
  currentMonth: Date;
  isOpenCreateModal: boolean;
  setIsOpenCreateModal: (isOpenCreateModal: boolean) => void;
  handleDateClick: (day: Date) => void;
};

const CalendarCells = ({
  currentMonth,
  isOpenCreateModal,
  setIsOpenCreateModal,
  handleDateClick,
}: CalendarCellsProps) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };
  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };
  const handlePlusButtonClick = (index: number) => {
    setIsOpenCreateModal(!isOpenCreateModal);
    const day = addDays(startDate, index);
    handleDateClick(day);
    console.log(day);
  };

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const isWeekend = getDay(day) === 0 || getDay(day) === 6;
      const isToday = isSameDay(day, new Date());
      const isWithinMonth = day >= monthStart && day <= monthEnd;
      const index = rows.length * 7 + i;

      days.push(
        <CalendarCell
          key={i}
          isWeekend={isWeekend}
          isToday={isToday}
          isWithinMonth={isWithinMonth}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {hoverIndex === index && (
            <CalendarPlusButton onClick={() => handlePlusButtonClick(index)}>
              +
            </CalendarPlusButton>
          )}
          {format(day, "d")}
        </CalendarCell>
      );
      day = addDays(day, 1);
    }
    rows.push(<CalendarRow key={rows.length}>{days}</CalendarRow>);
    days = [];
  }

  return <div>{rows}</div>;
};

export default CalendarCells;
