import { useMutation, useQueryClient } from "react-query";
import { boardCategoryKeys } from "../../types/boardKey";
import { waldregAxios as axios } from "./../../apis/axios";

async function boardCategoryUpdate(
  id: number,
  category_name: string
): Promise<void> {
  await axios.put(`/category/${id}`, {
    category_name: category_name,
  });
}

interface UseBoardCategoryUpdate {
  mutate: () => void;
}

export function useBoardCategoryUpdate(
  id: number,
  category_name: string
): UseBoardCategoryUpdate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => boardCategoryUpdate(id, category_name), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardCategoryKeys.all);
    },
  });
  return { mutate };
}
