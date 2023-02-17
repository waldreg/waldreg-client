import { useMutation, useQueryClient } from "react-query";
import { waldregAxios as axios } from "../../../apis/axios";
import { boardCategoryKeys } from "../../../types/boardKey";

async function deleteBoardCategory(id: number) {
  await axios.delete(`/category/${id}`);
}

interface UseBoardCategoryDelete {
  mutate: (id: number) => void;
}

export function useBoardCategoryDelete(): UseBoardCategoryDelete {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((id: number) => deleteBoardCategory(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardCategoryKeys.all);
    },
  });
  return { mutate };
}
