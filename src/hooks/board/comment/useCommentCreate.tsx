import { useMutation, useQueryClient } from "react-query";
import { waldregAxios as axios } from "../../../apis/axios";
import { boardCommentKeys } from "./../../../types/boardKey";

async function commentCreate(board_id: number, comment: string): Promise<void> {
  await axios.post(`/comment/${board_id}`, {
    content: comment,
  });
}

interface UseCommentCreate {
  mutate: () => void;
}

export function useCommentCreate(
  board_id: number,
  comment: string
): UseCommentCreate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => commentCreate(board_id, comment), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardCommentKeys.all);
    },
  });
  return { mutate };
}
