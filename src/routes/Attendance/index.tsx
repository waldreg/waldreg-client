import { Routes, Route } from 'react-router-dom';
import AttendanceCheckPage from './AttendanceCheck';

const Attendance = () => {
  return (
    <Routes>
      <Route path="/check" element={<AttendanceCheckPage />} />
    </Routes>
  );
};

export default Attendance;
