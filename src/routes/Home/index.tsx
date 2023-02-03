import React from "react";
import { useQuery } from "react-query";
import { categoryAPI } from "../../apis/categoryAPI";
import BoardCategory from "../../components/category/BoardCategory";

const Home = () => {
  const { data: boardCategories } = useQuery(
    "boardCategories",
    () => categoryAPI.getBoardCategories(),
    {
      onSuccess: (data) => {
        console.log("카테고리 가져오기 성공");
      },
      onError: () => {
        console.log("카테고리 가져오기 실패");
      },
    }
  );
  return (
    <div>
      {boardCategories && <BoardCategory categories={boardCategories} />}
    </div>
  );
};

export default Home;
