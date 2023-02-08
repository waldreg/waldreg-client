import React from "react";
import { Schedule, ScheduleLists } from "../../../interfaces/schedule";

interface ScheduleListProps {
  scheduleList: ScheduleLists;
}

function ScheduleList({ scheduleList }: ScheduleListProps) {
  return (
    <>
      {scheduleList.schedules.map((schedule: Schedule) => (
        <div key={schedule.finish_at}>
          <div>{schedule.schedule_title}</div>
          <div>{schedule.schedule_content}</div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default ScheduleList;
