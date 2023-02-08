import { useMutation, useQueryClient } from "react-query";
import { boardKeys } from "../../types/settingKeys";
import { Board } from "../../interfaces/board";
import axios from "axios";

async function createBoard(board: Board): Promise<void> {
  const { data } = await axios.post(
    // `/board`
    "http://localhost:8001/boards",
    board
  );
  return data;
}

interface UseCreateBoard {
  mutate: () => void;
}

export function useCreateBoard(BoardData: any): UseCreateBoard {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => createBoard(BoardData), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardKeys.all);
    },
  });
  return { mutate };
}
