import { useQuery } from "react-query";
import { Post } from "../../interfaces/board";
import { boardAPI } from "../../apis/boardAPI";
import { boardKeys } from "../../types/settingKeys";

interface UsePostDetail {
  post?: Post;
}

export function usePostDetail(id: number): UsePostDetail {
  const { data: post } = useQuery<Post>(boardKeys.detail(id), () =>
    boardAPI.getPost(id)
  );
  return { post };
}
