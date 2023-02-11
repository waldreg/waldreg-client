import { useMutation, useQueryClient } from "react-query";
import { Board } from "../../interfaces/board";
import { boardKeys } from "../../types/boardKey";
import { waldregAxios as axios } from "./../../apis/axios";

async function boardCreate(board: any): Promise<void> {
  await axios.post(`/board`, board, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

interface UseBoardCreate {
  mutate: () => void;
}

export function useBoardCreate(board: any): UseBoardCreate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => boardCreate(board), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardKeys.all);
    },
  });
  return { mutate };
}
