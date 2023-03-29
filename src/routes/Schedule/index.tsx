import { Routes, Route } from "react-router-dom";
import Calendar from "./Calendar";
import ScheduleDetail from "./../../components/schedule/ScheduleDetail/index";

const Schedule = () => {
  return (
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/:id" element={<ScheduleDetail />} />
    </Routes>
  );
};

export default Schedule;
