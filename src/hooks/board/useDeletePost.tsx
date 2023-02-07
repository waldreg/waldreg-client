import { useMutation } from "react-query";
import { boardAPI } from "../../apis/boardAPI";

interface UseDeletePost {
  mutate: () => void;
}

export function useDeletePost(id: number): UseDeletePost {
  const { mutate } = useMutation(() => boardAPI.deletePost(id));
  return { mutate };
}
