import { useQuery, useQueryClient } from "react-query";
import { waldregAxios as axios } from "./../../apis/axios";
import { boardKeys } from "../../types/boardKey";
import { BoardLists } from "../../interfaces/board";

async function getBoardList(
  category_id: number,
  from: number,
  to: number
): Promise<BoardLists> {
  const { data } = await axios.get(
    `/boards?category=${category_id}&from=${from}&to=${to}`
  );
  return data;
}

interface UseBoardList {
  boardList?: BoardLists;
}

export function useBoardList(
  category_id: number,
  from: number,
  to: number
): UseBoardList {
  const queryClient = useQueryClient();

  const { data: boardList } = useQuery<BoardLists>(
    [boardKeys.withCategory, category_id],
    () => getBoardList(category_id, from, to),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([boardKeys.withCategory, category_id]);
      },
    }
  );
  console.log(boardList);
  return { boardList };
}
