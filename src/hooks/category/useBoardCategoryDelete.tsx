import { useMutation, useQueryClient } from "react-query";
import { boardCategoryKeys } from "../../types/boardKey";
import { waldregAxios as axios } from "./../../apis/axios";

async function boardCategoryDelete(id: number) {
  const { data } = await axios.delete(`/category/${id}`);
  return data;
}

interface UseBoardCategoryDelete {
  mutate: () => void;
}

export function useBoardCategoryDelete(id: number): UseBoardCategoryDelete {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => boardCategoryDelete(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardCategoryKeys.all);
    },
  });
  return { mutate };
}
