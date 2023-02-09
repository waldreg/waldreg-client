import { useMutation, useQueryClient } from "react-query";
import { waldregAxios as axios } from "../../apis/axios";
import { scheduleKeys } from "../../types/scheduleKye";

async function scheduleDelete(scheduleId: number): Promise<void> {
  await axios.delete(`/schedule/${scheduleId}`);
}

interface UseScheduleDelete {
  mutate: () => void;
}

export function useScheduleDelete(scheduleId: number): UseScheduleDelete {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => scheduleDelete(scheduleId), {
    onSuccess: () => {
      queryClient.invalidateQueries(scheduleKeys.all);
    },
  });
  return { mutate };
}
