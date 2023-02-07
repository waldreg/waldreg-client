import { useQuery } from "react-query";
import { Board } from "../../interfaces/board";
import { boardKeys } from "../../types/settingKeys";
import { boardAPI } from "../../apis/boardAPI";

interface UseBoardList {
  boardList?: Board[];
}

export function useBoardList(): UseBoardList {
  const { data: boardList } = useQuery<Board[]>(
    boardKeys.all,
    boardAPI.getBoardList
  );
  return { boardList };
}
