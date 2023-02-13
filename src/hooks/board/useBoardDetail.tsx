import { useQuery } from "react-query";
import { Board } from "../../interfaces/board";
import { boardAPI } from "../../apis/boardAPI";
import { boardKeys } from "../../types/settingKeys";

interface UseBoardDetail {
  board?: Board;
}

export function useBoardDetail(id: number): UseBoardDetail {
  const { data: board } = useQuery<Board>(boardKeys.detail(id), () =>
    boardAPI.getBoard(id)
  );
  return { board };
}
