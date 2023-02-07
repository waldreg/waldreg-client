import { useQuery } from "react-query";
import { Board } from "../../interfaces/board";
import { boardKeys } from "../../types/settingKeys";
import axios from "axios";

async function getBoardList(): Promise<Board[]> {
  const { data } = await axios.get(
    // `/boards?category=${category_id}&from=${from}&to=${to}`
    "http://localhost:8001/boards"
  );
  return data;
}

interface UseBoardList {
  boardList?: Board[];
}

export function useBoardList(): UseBoardList {
  const { data: boardList } = useQuery<Board[]>(boardKeys.all, getBoardList);
  return { boardList };
}
