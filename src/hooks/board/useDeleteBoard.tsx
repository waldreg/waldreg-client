import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { boardKeys } from "../../types/settingKeys";

async function deleteBoard(id: number) {
  const { data } = await axios.delete(
    // `/board/${id}`
    `http://localhost:8001/boards/${id}`
  );
  return data;
}

interface UseDeletePost {
  mutate: () => void;
}

export function useDeletePost(id: number): UseDeletePost {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => deleteBoard(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(boardKeys.all);
    },
  });
  return { mutate };
}
