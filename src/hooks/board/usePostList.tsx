import { useQuery } from "react-query";
import { Post } from "../../interfaces/board";
import { boardAPI } from "./../../apis/boardAPI";

interface UsePostList {
  posts?: Post[];
}

export function usePostList(): UsePostList {
  const { data: posts } = useQuery<Post[]>("posts", boardAPI.getPostList);
  return { posts };
}
