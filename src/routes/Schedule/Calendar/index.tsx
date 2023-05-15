import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import {
  CalendarContainer,
  CalendarContentTextarea,
  CalendarDeleteButton,
  CalendarTitleInput,
} from "./style";
import CalendarHeader from "../../../components/calendar/CalendarHeader";
import CalendarDays from "../../../components/calendar/CalendarDays";
import CalendarCells from "../../../components/calendar/CalendarCells";
import CalendarModal from "../../../components/calendar/CalendarModal";
import { useScheduleCreate } from "../../../hooks/schedule/useScheduleCreate";
import CalendarDatePicker from "../../../components/calendar/CalendarDatePicker";
import { TrashcanIcon } from "../../../components/Icons/SettingIcons";
import { useScheduleDelete } from "../../../hooks/schedule/useScheduleDelete";
import { useScheduleUpdate } from "../../../hooks/schedule/useScheduleUpdate";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [detail, setDetail] = useState({
    id: 0,
    title: "",
    content: "",
    started_at: new Date(),
    finish_at: new Date(),
  });

  const scheduleDelete = useScheduleDelete(detail.id);
  const handleDeleteButtonClick = () => {
    scheduleDelete.mutate();
    setIsOpenDetailModal(!isOpenDetailModal);
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const handleTodayClick = () => {
    setCurrentMonth(new Date());
  };

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [startAt, setStartAt] = useState<Date | null>();
  const [endAt, setEndAt] = useState<Date | null>();

  const startDateString = startAt?.toISOString().slice(0, -5);
  const endDateString = endAt?.toISOString().slice(0, -5);

  const scheduleData = {
    schedule_title: title,
    schedule_content: content,
    started_at: startDateString!!,
    finish_at: endDateString!!,
    repeat: {
      cycle: 123,
      repeat_finish_at: "2023-12-31T23:59",
    },
  };

  const createMutation = useScheduleCreate(scheduleData);
  const updateMutation = useScheduleUpdate(detail.id, scheduleData);

  const handleCreateSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createMutation.mutate();
    setIsOpenCreateModal(false);
    setTitle("");
    setContent("");
  };

  const handleUpdateSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    updateMutation.mutate();
    setIsOpenCreateModal(false);
    setTitle("");
    setContent("");
  };

  const handleDateClick = (day: Date) => {
    setStartAt(day);
    setEndAt(day);
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
          isOpenDetailModal={isOpenDetailModal}
          setIsOpenCreateModal={setIsOpenCreateModal}
          setIsOpenDetailModal={setIsOpenDetailModal}
          handleDateClick={handleDateClick}
          year={currentMonth.getFullYear()}
          month={currentMonth.getMonth() + 1}
          setDetail={setDetail}
        />
      </CalendarContainer>

      {isOpenCreateModal && (
        <CalendarModal
          onClickToggleModal={() => setIsOpenCreateModal(!isOpenCreateModal)}
          handleSubmit={handleCreateSubmit}
          buttonName1="취소"
          buttonName2="생성"
        >
          <CalendarTitleInput
            type="text"
            placeholder="제목 없음"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <CalendarDatePicker
            startDate={startAt!!}
            endDate={endAt!!}
            setStartDate={setStartAt}
            setEndDate={setEndAt}
          />
          <CalendarContentTextarea
            placeholder="내용을 추가하세요"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </CalendarModal>
      )}

      {isOpenDetailModal && (
        <CalendarModal
          onClickToggleModal={() => setIsOpenDetailModal(!isOpenDetailModal)}
          handleSubmit={handleUpdateSubmit}
          buttonName1="취소"
          buttonName2="수정"
        >
          <CalendarDeleteButton onClick={handleDeleteButtonClick}>
            <TrashcanIcon width={30} height={30} />
          </CalendarDeleteButton>

          <CalendarTitleInput
            type="text"
            value={detail.title}
            onChange={(e) => setDetail({ ...detail, title: e.target.value })}
          />
          <CalendarDatePicker
            startDate={new Date(detail.started_at)}
            endDate={new Date(detail.finish_at)}
            setStartDate={setStartAt}
            setEndDate={setEndAt}
          />
          <CalendarContentTextarea
            value={detail.content}
            onChange={(e) => setDetail({ ...detail, content: e.target.value })}
          />
        </CalendarModal>
      )}
    </>
  );
};

export default Calendar;
