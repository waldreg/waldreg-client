import { useMutation, useQueryClient } from "react-query";
import { waldregAxios as axios } from "../../../apis/axios";
import { boardCategoryKeys } from "../../../types/boardKey";

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
