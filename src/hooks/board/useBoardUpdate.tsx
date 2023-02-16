import { useMutation, useQueryClient } from "react-query";
import { boardKeys } from "../../types/boardKey";
import { waldregAxios as axios } from "./../../apis/axios";

async function boardUpdate(id: number, board: any): Promise<void> {
  await axios.post(`/board/${id}`, board, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

interface UseBoardUpdate {
  mutate: () => void;
}

export function useBoardUpdate(id: number, board: any): UseBoardUpdate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => boardUpdate(id, board), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardKeys.detail(id));
    },
  });
  return { mutate };
}
