import { useMutation } from "react-query";
import { boardAPI } from "./../../apis/boardAPI";

interface UseCreatePost {
  mutate: () => void;
}

export function useCreatePost(PostData: any): UseCreatePost {
  const { mutate } = useMutation(() => boardAPI.createPost(PostData));
  return { mutate };
}
