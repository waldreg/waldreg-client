import { useQuery } from "react-query";
import { waldregAxios as axios } from "./../../apis/axios";
import { boardKeys } from "../../types/boardKey";
import { BoardLists } from "../../interfaces/board";

async function getBoardSearch(
  type: string,
  keyword: string,
  from: number,
  to: number
): Promise<BoardLists> {
  const { data } = await axios.get(
    `/board/search?type=${type}&keyword=${keyword}&from=${from}&to=${to}`
  );
  return data;
}

interface UseBoardList {
  boardList?: BoardLists;
}

export function useBoardSearch(
  type: string,
  keyword: string,
  from: number,
  to: number
): UseBoardList {
  const { data: boardList } = useQuery<BoardLists>(boardKeys.all, () =>
    getBoardSearch(type, keyword, from, to)
  );

  return { boardList };
}
