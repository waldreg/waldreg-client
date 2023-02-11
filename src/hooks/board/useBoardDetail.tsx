import { useQuery } from "react-query";
import { Board } from "../../interfaces/board";
import { waldregAxios as axios } from "./../../apis/axios";
import { boardKeys } from "../../types/boardKey";

async function getBoardDetail(id: number): Promise<Board> {
  const { data } = await axios.get(`/board/${id}`);
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
