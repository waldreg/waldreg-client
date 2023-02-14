import { useQuery } from "react-query";
import { waldregAxios as axios } from "../../apis/axios";
import { BoardCategoryLists } from "../../interfaces/board.js";
import { boardCategoryKeys } from "../../types/boardKey";

async function getBoardCategoryList(): Promise<BoardCategoryLists> {
  const { data } = await axios.get("/category");
  return data;
}

interface UseBoardCategoryList {
  boardCategoryList?: BoardCategoryLists;
}

export function useBoardCategoryList(): UseBoardCategoryList {
  const { data: boardCategoryList } = useQuery<BoardCategoryLists>(
    boardCategoryKeys.all,
    getBoardCategoryList
  );
  return { boardCategoryList };
}
