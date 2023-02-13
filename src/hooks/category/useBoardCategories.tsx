import { useQuery } from "react-query";
import { categoryAPI } from "../../apis/categoryAPI";
import { BoardCategory } from "../../interfaces/category";
import { boardCategoryKeys } from "../../types/settingKeys";

interface UseBoardCategories {
  boardCategories?: BoardCategory[];
}

export function useBoardCategories(): UseBoardCategories {
  const { data: boardCategories } = useQuery(
    boardCategoryKeys.all,
    categoryAPI.getBoardCategories
  );
  return { boardCategories };
}
