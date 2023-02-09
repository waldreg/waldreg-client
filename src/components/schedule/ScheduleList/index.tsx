import React from "react";
import { useNavigate } from "react-router-dom";
import { Schedule, ScheduleLists } from "../../../interfaces/schedule";

interface ScheduleListProps {
  scheduleList: ScheduleLists;
}

function ScheduleList({ scheduleList }: ScheduleListProps) {
  const navigate = useNavigate();

  const handleScheduleClick = (e: React.MouseEvent) => {
    const id = e.currentTarget.children[0].innerHTML;
    navigate(`/schedule/${id}`);
  };

  return (
    <>
      {scheduleList.schedules.map((schedule: Schedule) => (
        <div key={schedule.id} onClick={handleScheduleClick}>
          <div>{schedule.id}</div>
          <div>{schedule.schedule_title}</div>
          <div>{schedule.schedule_content}</div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default ScheduleList;
