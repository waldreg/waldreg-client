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
import {
  CalendarCell,
  CalendarContentTextarea,
  CalendarPlusButton,
  CalendarRow,
  CalendarTitleInput,
} from "./style";
import CalendarModal from "./../CalendarModal/index";

type CalendarCellsProps = {
  currentMonth: Date;
};

const CalendarCells = ({ currentMonth }: CalendarCellsProps) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };
  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  const handlePlusButtonClick = () => {
    setIsOpenCreateModal(!isOpenCreateModal);
  };

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const isWeekend = getDay(day) === 0 || getDay(day) === 6;
      const isToday = isSameDay(day, new Date());
      const isWithinMonth = day >= monthStart && day <= monthEnd;
      const index = rows.length * 7 + i; // 셀의 전체 인덱스

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
            <CalendarPlusButton onClick={handlePlusButtonClick}>
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

  return (
    <>
      <div>{rows}</div>
      {isOpenCreateModal && (
        <CalendarModal onClickToggleModal={handlePlusButtonClick}>
          <CalendarTitleInput type="text" placeholder="제목 없음" />
          <CalendarContentTextarea placeholder="내용을 추가하세요" />
        </CalendarModal>
      )}
    </>
  );
};

export default CalendarCells;
