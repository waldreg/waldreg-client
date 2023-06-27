import { useMutation, useQueryClient } from "react-query";
import { boardKeys } from "../../types/boardKey";
import { waldregAxios as axios } from "./../../apis/axios";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const { mutate } = useMutation(() => boardUpdate(id, board), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(boardKeys.detail(id));
      return navigate(-1);
    },
  });
  return { mutate };
}
