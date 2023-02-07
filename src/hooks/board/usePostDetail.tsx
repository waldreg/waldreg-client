import { useQuery } from "react-query";
import { Post } from "../../interfaces/board";
import { boardAPI } from "../../apis/boardAPI";

interface UsePostDetail {
  post?: Post;
}

export function usePostDetail(id: number): UsePostDetail {
  const { data: post } = useQuery<Post>("post", () => boardAPI.getPost(id));
  return { post };
}
