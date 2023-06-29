import { useMutation, useQueryClient } from "react-query";
import { boardKeys } from "../../types/boardKey";
import { waldregAxios as axios } from "./../../apis/axios";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const { mutate } = useMutation(() => boardCreate(board), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(boardKeys.all);
      return navigate(-1);
    },
  });
  return { mutate };
}
