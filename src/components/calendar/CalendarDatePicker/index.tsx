import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import FONT from "./../../../constants/fonts";
import { ko } from "date-fns/esm/locale";
import { CalendarDateBox, CalendarDateSpan, SDatePicker } from "./style";

const CalendarDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <CalendarDateBox>
        <CalendarDateSpan style={FONT.BODY1}>시작일</CalendarDateSpan>
        <SDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
        />
      </CalendarDateBox>

      <CalendarDateBox>
        <CalendarDateSpan style={FONT.BODY1}>종료일</CalendarDateSpan>
        <SDatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date as Date)}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
        />
      </CalendarDateBox>
    </>
  );
};

export default CalendarDatePicker;
