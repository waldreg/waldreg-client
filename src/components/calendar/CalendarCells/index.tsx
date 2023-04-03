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
  CalendarPlusButton,
  CalendarRow,
  Schedule,
  ScheduleBox,
} from "./style";
import FONT from "../../../constants/fonts";
import { useScheduleList } from "../../../hooks/schedule/useScheduleList";

type CalendarCellsProps = {
  currentMonth: Date;
  isOpenCreateModal: boolean;
  isOpenDetailModal: boolean;
  setIsOpenCreateModal: (isOpenCreateModal: boolean) => void;
  setIsOpenDetailModal: (isOpenDetailModal: boolean) => void;
  handleDateClick: (day: Date) => void;
  year: number;
  month: number;
  setDetail: (detail: any) => void;
};

const CalendarCells = ({
  currentMonth,
  isOpenCreateModal,
  isOpenDetailModal,
  setIsOpenCreateModal,
  setIsOpenDetailModal,
  handleDateClick,
  year,
  month,
  setDetail,
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
  };

  const handleScheduleClick = (schedule: any) => {
    setIsOpenDetailModal(!isOpenDetailModal);
    setDetail({
      title: schedule.schedule_title,
      content: schedule.schedule_content,
      started_at: new Date(schedule.started_at),
      finish_at: new Date(schedule.finish_at),
    });
  };

  const scheduleList = useScheduleList(year, month);

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
          style={FONT.DETAIL1}
        >
          {hoverIndex === index && (
            <CalendarPlusButton
              onClick={() => handlePlusButtonClick(index)}
              style={FONT.SUBTITLE2}
            >
              +
            </CalendarPlusButton>
          )}
          {scheduleList &&
            scheduleList.scheduleList &&
            scheduleList.scheduleList.schedules.some((schedule: any) => {
              const started_at = new Date(schedule.started_at);
              const finish_at = new Date(schedule.finish_at);

              return (
                started_at.getFullYear() === year &&
                started_at.getMonth() === month - 1 &&
                started_at.getDate() <= day.getDate() - 1 &&
                finish_at.getDate() >= day.getDate() - 1
              );
            }) && (
              <ScheduleBox>
                {scheduleList.scheduleList.schedules
                  .filter((schedule: any) => {
                    const started_at = new Date(schedule.started_at);
                    const finish_at = new Date(schedule.finish_at);

                    return (
                      started_at.getFullYear() === year &&
                      started_at.getMonth() === month - 1 &&
                      started_at.getDate() <= day.getDate() - 1 &&
                      finish_at.getDate() >= day.getDate() - 1
                    );
                  })
                  .map((schedule: any) => (
                    <Schedule
                      onClick={() => handleScheduleClick(schedule)}
                      key={schedule.id}
                    >
                      {schedule.schedule_title}
                    </Schedule>
                  ))}
              </ScheduleBox>
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
