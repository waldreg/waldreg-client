import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import {
  CalendarContainer,
  CalendarContentTextarea,
  CalendarTitleInput,
} from "./style";
import CalendarHeader from "../../../components/calendar/CalendarHeader";
import CalendarDays from "../../../components/calendar/CalendarDays";
import CalendarCells from "../../../components/calendar/CalendarCells";
import CalendarModal from "../../../components/calendar/CalendarModal";
import { useScheduleCreate } from "../../../hooks/schedule/useScheduleCreate";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const handleTodayClick = () => {
    setCurrentMonth(new Date());
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const scheduleData = {
    schedule_title: title,
    schedule_content: content,
  };

  const createMutation = useScheduleCreate(scheduleData);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createMutation.mutate();
    setIsOpenCreateModal(false);
  };

  return (
    <>
      <CalendarContainer>
        <CalendarHeader
          currentMonth={currentMonth}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          today={handleTodayClick}
        />
        <CalendarDays />
        <CalendarCells
          currentMonth={currentMonth}
          isOpenCreateModal={isOpenCreateModal}
          setIsOpenCreateModal={setIsOpenCreateModal}
        />
      </CalendarContainer>

      {isOpenCreateModal && (
        <CalendarModal
          onClickToggleModal={() => setIsOpenCreateModal(!isOpenCreateModal)}
          handleSubmit={handleSubmit}
        >
          <CalendarTitleInput
            type="text"
            placeholder="제목 없음"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <CalendarContentTextarea
            placeholder="내용을 추가하세요"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </CalendarModal>
      )}
    </>
  );
};

export default Calendar;
