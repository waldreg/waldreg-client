import { useQuery } from "react-query";
import { Post } from "../../interfaces/board";
import { boardKeys } from "../../types/settingKeys";
import { boardAPI } from "./../../apis/boardAPI";

interface UsePostList {
  posts?: Post[];
}

export function usePostList(): UsePostList {
  const { data: posts } = useQuery<Post[]>(boardKeys.all, boardAPI.getPostList);
  return { posts };
}
