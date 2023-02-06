import { useQuery } from "react-query";
import { categoryAPI } from "../../apis/categoryAPI";
import { BoardCategory } from "../../interfaces/category";

interface UseBoardCategories {
  boardCategories?: BoardCategory[];
}

export function useBoardCategories(): UseBoardCategories {
  const { data: boardCategories } = useQuery(
    "boardCategories",
    categoryAPI.getBoardCategories
  );
  return { boardCategories };
}
