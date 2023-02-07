import { useMutation, useQueryClient } from "react-query";
import { boardKeys } from "../../types/settingKeys";
import { boardAPI } from "./../../apis/boardAPI";

interface UseCreatePost {
  mutate: () => void;
}

export function useCreatePost(PostData: any): UseCreatePost {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => boardAPI.createPost(PostData), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardKeys.all); // Invalidate and refetch
    },
  });
  return { mutate };
}
