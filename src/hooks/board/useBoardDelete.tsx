import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { boardKeys } from "../../types/settingKeys";

async function boardDelete(id: number) {
  const { data } = await axios.delete(
    // `/board/${id}`
    `http://localhost:8001/boards/${id}`
  );
  return data;
}

interface UseBoardDelete {
  mutate: () => void;
}

export function useBoardDelete(id: number): UseBoardDelete {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => boardDelete(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardKeys.all);
    },
  });
  return { mutate };
}
