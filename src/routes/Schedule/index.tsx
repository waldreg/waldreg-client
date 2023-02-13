import { Routes, Route } from "react-router-dom";
import ScheduleCreate from "../../components/schedule/SeheduleCreate";
import Calendar from "./Calendar";
import ScheduleDetail from "./../../components/schedule/ScheduleDetail/index";

const Schedule = () => {
  return (
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/create" element={<ScheduleCreate />} />
      <Route path="/:id" element={<ScheduleDetail />} />
    </Routes>
  );
};

export default Schedule;
