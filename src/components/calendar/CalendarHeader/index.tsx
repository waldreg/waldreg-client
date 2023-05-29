import { format } from "date-fns";
import FONT from "../../../constants/fonts";
import {
  CalendarHeaderArrow,
  CalendarHeaderLeft,
  CalendarHeaderRight,
  CalendarHeaderStyle,
  CalendarToday,
} from "./style";

type CalendarHeaderProps = {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
  today: () => void;
};

const CalendarHeader = ({
  currentMonth,
  prevMonth,
  nextMonth,
  today,
}: CalendarHeaderProps) => {
  return (
    <CalendarHeaderStyle>
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
    </CalendarHeaderStyle>
  );
};

export default CalendarHeader;
