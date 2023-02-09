import { useMutation, useQueryClient } from "react-query";
import { waldregAxios as axios } from "../../apis/axios";
import { Schedule } from "../../interfaces/schedule";
import { scheduleKeys } from "../../types/scheduleKye";

async function scheduleCreate(schedule: Schedule): Promise<void> {
  await axios.post(`/schedule`, schedule);
}

interface UseScheduleCreate {
  mutate: () => void;
}

export function useScheduleCreate(schedule: Schedule): UseScheduleCreate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => scheduleCreate(schedule), {
    onSuccess: () => {
      queryClient.invalidateQueries(scheduleKeys.all);
    },
  });
  return { mutate };
}
