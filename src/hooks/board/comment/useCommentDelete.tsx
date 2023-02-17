import { useMutation, useQueryClient } from "react-query";
import { waldregAxios as axios } from "../../../apis/axios";
import { boardCommentKeys } from "./../../../types/boardKey";

async function commentDelete(comment_id: number): Promise<void> {
  await axios.delete(`/comment/${comment_id}`);
}

interface UseCommentDelete {
  mutate: () => void;
}

export function useCommentDelete(comment_id: number): UseCommentDelete {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => commentDelete(comment_id), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardCommentKeys.all);
    },
  });
  return { mutate };
}
