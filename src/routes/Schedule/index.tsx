import { Routes, Route } from "react-router-dom";
import Calendar from "./Calendar";

const Schedule = () => {
  return (
    <Routes>
      <Route path="/" element={<Calendar />} />
    </Routes>
  );
};

export default Schedule;
