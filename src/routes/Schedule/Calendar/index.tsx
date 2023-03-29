import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import { CalendarContainer } from "./style";
import CalendarHeader from "../../../components/calendar/CalendarHeader";
import CalendarDays from "../../../components/calendar/CalendarDays";
import CalendarCells from "../../../components/calendar/CalendarCells";

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
      <CalendarHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        today={handleTodayClick}
      />
      <CalendarDays />
      <CalendarCells currentMonth={currentMonth} />
    </CalendarContainer>
  );
};

export default Calendar;
