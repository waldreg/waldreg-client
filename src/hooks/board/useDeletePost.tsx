import { useMutation, useQueryClient } from "react-query";
import { boardAPI } from "../../apis/boardAPI";
import { boardKeys } from "../../types/settingKeys";

interface UseDeletePost {
  mutate: () => void;
}

export function useDeletePost(id: number): UseDeletePost {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => boardAPI.deletePost(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardKeys.all); // Invalidate and refetch
    },
  });
  return { mutate };
}
