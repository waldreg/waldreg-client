import { useMutation, useQueryClient } from "react-query";
import { waldregAxios as axios } from "../../../apis/axios";
import { boardCategoryKeys } from "../../../types/boardKey";

async function boardCategoryCreate(name: string): Promise<void> {
  await axios.post(`/category`, {
    category_name: name,
  });
}

interface UseBoardCategoryCreate {
  mutate: () => void;
}

export function useBoardCategoryCreate(name: string): UseBoardCategoryCreate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => boardCategoryCreate(name), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardCategoryKeys.all);
    },
  });
  return { mutate };
}
