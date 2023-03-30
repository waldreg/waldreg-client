import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import FONT from "./../../../constants/fonts";
import { ko } from "date-fns/esm/locale";
import {
  CalendarDateBox,
  CalendarDateContainer,
  CalendarDateSpan,
  SDatePicker,
} from "./style";

interface CalendarDatePickerProps {
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
}

const CalendarDatePicker = ({
  setStartDate,
  setEndDate,
}: CalendarDatePickerProps) => {
  const [startAt, setStartAt] = useState(new Date());
  const [endAt, setEndAt] = useState(new Date());

  return (
    <CalendarDateContainer>
      <CalendarDateBox>
        <CalendarDateSpan style={FONT.BODY1}>시작일</CalendarDateSpan>
        <SDatePicker
          selected={startAt}
          onChange={(date) => {
            setStartAt(date as Date);
            setStartDate(date as Date);
          }}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
        />
      </CalendarDateBox>

      <CalendarDateBox>
        <CalendarDateSpan style={FONT.BODY1}>종료일</CalendarDateSpan>
        <SDatePicker
          selected={endAt}
          onChange={(date) => {
            setEndAt(date as Date);
            setEndDate(date as Date);
          }}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
        />
      </CalendarDateBox>
    </CalendarDateContainer>
  );
};

export default CalendarDatePicker;
