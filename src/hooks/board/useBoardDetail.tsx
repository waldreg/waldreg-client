import { useQuery } from "react-query";
import { Board } from "../../interfaces/board";
import { boardKeys } from "../../types/settingKeys";
import axios from "axios";

async function getBoardDetail(id: number): Promise<Board> {
  const { data } = await axios.get(
    // `/board/${id}`
    `http://localhost:8001/boards/${id}`
  );
  return data;
}

interface UseBoardDetail {
  board?: Board;
}

export function useBoardDetail(id: number): UseBoardDetail {
  const { data: board } = useQuery<Board>(boardKeys.detail(id), () =>
    getBoardDetail(id)
  );
  return { board };
}
