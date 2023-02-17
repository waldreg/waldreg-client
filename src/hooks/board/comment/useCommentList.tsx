import { useQuery } from "react-query";
import { waldregAxios as axios } from "../../../apis/axios";
import { BoardCommentLists } from "../../../interfaces/board";
import { boardCommentKeys } from "../../../types/boardKey";

async function commnetList(
  board_id: number,
  start_idx: number,
  end_idx: number
): Promise<BoardCommentLists> {
  const { data } = await axios.get(
    `/board/comment/${board_id}?from=${start_idx}&to=${end_idx}`
  );
  return data;
}

interface UseCommentList {
  commentLists?: BoardCommentLists;
}

export function useCommentList(
  board_id: number,
  start_idx: number,
  end_idx: number
): UseCommentList {
  const { data: commentLists } = useQuery<BoardCommentLists>(
    boardCommentKeys.all,
    () => commnetList(board_id, start_idx, end_idx)
  );
  return { commentLists };
}
