import { Routes, Route } from "react-router-dom";
import ScheduleCreate from "../../components/schedule/SeheduleCreate";
import Calendar from "./Calendar";

const Schedule = () => {
  return (
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/create" element={<ScheduleCreate />} />
    </Routes>
  );
};

export default Schedule;
