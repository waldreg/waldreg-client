import { Routes, Route } from "react-router-dom";
import Announcement from "./Announcement";
import Changelog from "./Changelog";
import Question from "./Question";
import Bug from "./Bug";
import BoardCreate from "../../components/board/BoardCreate/index";
import Free from "./Free";
import BoardDetail from "../../components/board/BoardDetail";

const Board = () => {
  return (
    <Routes>
      {/* TODO: 생성, 디테일 route 합치기 */}
      <Route path="/announcement" element={<Announcement />} />
      <Route path="/announcement/create" element={<BoardCreate />} />
      <Route path="/announcement/:id" element={<BoardDetail />} />
      <Route path="/question" element={<Question />} />
      <Route path="/free" element={<Free />} />
      <Route path="/bug" element={<Bug />} />
      <Route path="/changelog" element={<Changelog />} />
      <Route path="/create" element={<BoardCreate />} />
    </Routes>
  );
};

export default Board;
