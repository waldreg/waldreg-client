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
  startDate: Date;
  endDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
  detail?: any;
}

const CalendarDatePicker = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  detail,
}: CalendarDatePickerProps) => {
  const [startAt, setStartAt] = useState(startDate);
  const [endAt, setEndAt] = useState(endDate);

  return (
    <CalendarDateContainer>
      <CalendarDateBox>
        <CalendarDateSpan style={FONT.BODY1}>시작일</CalendarDateSpan>
        <SDatePicker
          selected={startAt}
          onChange={(date) => {
            if (date) {
              setStartAt(date as Date);
              setStartDate(date as Date);
              detail.started_at = (date as Date).toISOString().slice(0, -5);
            }
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
            detail.finish_at = (date as Date).toISOString().slice(0, -5);
          }}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
        />
      </CalendarDateBox>
    </CalendarDateContainer>
  );
};

export default CalendarDatePicker;
