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
import { CalendarCell, CalendarRow } from "./style";

type RenderCellsProps = {
  currentMonth: Date;
};

const CalendarCells = ({ currentMonth }: RenderCellsProps) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const isWeekend = getDay(day) === 0 || getDay(day) === 6;
      const isToday = isSameDay(day, new Date());
      const isWithinMonth = day >= monthStart && day <= monthEnd;

      days.push(
        <CalendarCell
          key={i}
          isWeekend={isWeekend}
          isToday={isToday}
          isWithinMonth={isWithinMonth}
        >
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
