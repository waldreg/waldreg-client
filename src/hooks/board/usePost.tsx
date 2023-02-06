import { useQuery } from "react-query";
import { Post } from "../../interfaces/board";
import { boardAPI } from "./../../apis/boardAPI";

interface UsePost {
  post?: Post;
}

export function usePost(id: number): UsePost {
  const { data: post } = useQuery<Post>("post", () => boardAPI.getPost(id));
  return { post };
}
