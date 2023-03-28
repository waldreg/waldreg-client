import { useMutation, useQueryClient } from "react-query";
import { waldregAxios as axios } from "./../../apis/axios";
import { homeKeys } from "./../../types/homeKeys";

async function homeUpdate(content: string): Promise<void> {
  await axios.post(`/application/home`, {
    content: content,
  });
}

interface UseHomeUpdate {
  mutate: () => void;
}

export function useHomeUpdate(content: string): UseHomeUpdate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => homeUpdate(content), {
    onSuccess: () => {
      queryClient.invalidateQueries(homeKeys.all);
    },
  });
  return { mutate };
}
