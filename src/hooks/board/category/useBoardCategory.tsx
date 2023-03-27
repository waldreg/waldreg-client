import { useQuery } from "react-query";
import { waldregAxios as axios } from "../../../apis/axios";
import { boardCategoryKeys } from "../../../types/boardKey";
import { BoardCategory } from "../../../interfaces/board";

async function getBoardCategory(id: number): Promise<BoardCategory> {
  const { data } = await axios.get(`/category/${id}`);
  return data;
}

interface UseBoardCategory {
  boardCategory?: BoardCategory;
}

export function useBoardCategory(id: number): UseBoardCategory {
  const { data: boardCategory } = useQuery<BoardCategory>(
    boardCategoryKeys.detail(id),
    () => getBoardCategory(id)
  );
  return { boardCategory };
}
