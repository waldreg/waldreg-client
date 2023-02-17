import { useMutation, useQueryClient } from "react-query";
import { waldregAxios as axios } from "../../../apis/axios";
import { boardCommentKeys } from "../../../types/boardKey";
import { BoardComment } from "./../../../interfaces/board";

async function commentUpdate(
  comment_id: number,
  comment: BoardComment
): Promise<void> {
  await axios.put(`/comment/${comment_id}`, {
    content: comment,
  });
}

interface UseCommentUpdate {
  mutate: () => void;
}

export function useCommentUpdate(
  comment_id: number,
  comment: BoardComment
): UseCommentUpdate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => commentUpdate(comment_id, comment), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardCommentKeys.all);
    },
  });
  return { mutate };
}
