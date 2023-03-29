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
import { CalendarCell, CalendarCellsStyle } from "./style";

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
      days.push(
        <CalendarCellsStyle
          key={i}
          isWeekend={getDay(day) === 0 || getDay(day) === 6}
          isToday={isSameDay(day, new Date())}
        >
          {format(day, "d")}
        </CalendarCellsStyle>
      );
      day = addDays(day, 1);
    }
    rows.push(<CalendarCell key={rows.length}>{days}</CalendarCell>);
    days = [];
  }
  return <div>{rows}</div>;
};

export default CalendarCells;
