import React from "react";
import BoardCategory from "../../components/category/BoardCategory";
import { useBoardCategories } from "./../../hooks/category/useBoardCategories";

const Home = () => {
  const { boardCategories } = useBoardCategories();

  return (
    <div>
      {boardCategories && <BoardCategory categories={boardCategories} />}
    </div>
  );
};

export default Home;
