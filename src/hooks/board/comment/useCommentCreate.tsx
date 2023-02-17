import { useMutation, useQueryClient } from "react-query";
import { waldregAxios as axios } from "../../../apis/axios";
import { boardCommentKeys } from "./../../../types/boardKey";
import { BoardComment } from "./../../../interfaces/board";

async function commentCreate(
  board_id: number,
  comment: BoardComment
): Promise<void> {
  await axios.post(`/comment/${board_id}`, {
    content: comment,
  });
}

interface UseCommentCreate {
  mutate: () => void;
}

export function useCommentCreate(
  board_id: number,
  comment: BoardComment
): UseCommentCreate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => commentCreate(board_id, comment), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardCommentKeys.all);
    },
  });
  return { mutate };
}
