import { useMutation, useQueryClient } from "react-query";
import { boardKeys } from "../../types/settingKeys";
import { Board } from "../../interfaces/board";
import axios from "axios";

async function boardCreate(board: Board): Promise<void> {
  const { data } = await axios.post(
    // `/board`
    "http://localhost:8001/boards",
    board
  );
  return data;
}

interface UseBoardCreate {
  mutate: () => void;
}

export function useBoardCreate(BoardData: any): UseBoardCreate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => boardCreate(BoardData), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardKeys.all);
    },
  });
  return { mutate };
}
