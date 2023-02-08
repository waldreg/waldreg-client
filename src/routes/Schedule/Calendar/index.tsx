import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScheduleList from "../../../components/schedule/ScheduleList";
import { useScheduleDetail } from "../../../hooks/schedule/useScheduleDetail";
import { useScheduleList } from "./../../../hooks/schedule/useScheduleList";

const Calendar = () => {
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(24);
  const navigate = useNavigate();

  const schedule = useScheduleDetail(2);
  const { scheduleList } = useScheduleList(year, month, day);

  return (
    <div>
      <div>스케줄 리스트</div>
      <hr />
      {scheduleList && <ScheduleList scheduleList={scheduleList} />}
      <button onClick={() => navigate("/schedule/create")}>스케줄 생성</button>
      {/* <div>
        <div>{schedule.scheduleDetail?.schedule_title}</div>
        <div>{schedule.scheduleDetail?.schedule_content}</div>
        <div>{schedule.scheduleDetail?.started_at}</div>
        <div>{schedule.scheduleDetail?.finish_at}</div>
      </div> */}
    </div>
  );
};

export default Calendar;
