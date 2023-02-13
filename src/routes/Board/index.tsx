import { Routes, Route } from "react-router-dom";
import Announcement from "./Announcement";
import Changelog from "./Changelog";
import Question from "./Question";
import Bug from "./Bug";
import BoardCreate from "../../components/board/BoardCreate/index";
import Free from "./Free";
import BoardDetail from "../../components/board/BoardDetail";
import AnnouncementLayout from "./Announcement/AnnouncementLayout";

const Board = () => {
  return (
    <Routes>
      <Route element={<AnnouncementLayout />}>
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/announcement/create" element={<BoardCreate />} />
        <Route path="/announcement/:id" element={<BoardDetail />} />
      </Route>

      <Route path="/question" element={<Question />} />
      <Route path="/free" element={<Free />} />
      <Route path="/bug" element={<Bug />} />
      <Route path="/changelog" element={<Changelog />} />
    </Routes>
  );
};

export default Board;
