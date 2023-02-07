import { useMutation, useQueryClient } from "react-query";
import { boardKeys } from "../../types/settingKeys";
import { boardAPI } from "../../apis/boardAPI";

interface UseCreateBoard {
  mutate: () => void;
}

export function useCreateBoard(BoardData: any): UseCreateBoard {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => boardAPI.createBoard(BoardData), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardKeys.all); // Invalidate and refetch
    },
  });
  return { mutate };
}
