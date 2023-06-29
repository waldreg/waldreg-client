import { useMutation, useQueryClient } from "react-query";
import { boardKeys } from "../../types/boardKey";
import { waldregAxios as axios } from "./../../apis/axios";
import { useNavigate } from "react-router-dom";

async function boardDelete(id: number): Promise<void> {
  await axios.delete(`/board/${id}`);
}

interface UseBoardDelete {
  mutate: () => void;
}

export function useBoardDelete(id: number, categoryId: number): UseBoardDelete {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate } = useMutation(() => boardDelete(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardKeys.all);
      navigate(`/board/${categoryId}`);
    },
  });

  return { mutate };
}
