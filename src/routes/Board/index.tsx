import { Routes, Route } from "react-router-dom";
import BoardCreate from "../../components/board/BoardCreate/index";
import BoardDetail from "../../components/board/BoardDetail";
import BoardLayout from "./BoardLayout/index";
import BoardPage from "./BoardPage";
import BoardUpdate from "./../../components/board/BoardUpdate/index";

const Board = () => {
  return (
    <Routes>
      <Route element={<BoardLayout />}>
        <Route path="/" element={<BoardPage />} />
        <Route path="/create" element={<BoardCreate />} />
        <Route path="/update/:id" element={<BoardUpdate />} />
        <Route path="/:id" element={<BoardDetail />} />
      </Route>
    </Routes>
  );
};

export default Board;
