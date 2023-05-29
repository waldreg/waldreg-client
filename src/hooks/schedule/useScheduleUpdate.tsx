import { useMutation, useQueryClient } from "react-query";
import { waldregAxios as axios } from "../../apis/axios";
import { Schedule } from "../../interfaces/schedule";
import { scheduleKeys } from "../../types/scheduleKeys";

async function ScheduleUpdate(
  schedule_id: number,
  schedule: any
): Promise<void> {
  await axios.put(`/schedule/${schedule_id}`, schedule);
}

interface UseScheduleUpdate {
  mutate: () => void;
}

export function useScheduleUpdate(
  schedule_id: number,
  schedule: any
): UseScheduleUpdate {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => ScheduleUpdate(schedule_id, schedule), {
    onSuccess: () => {
      queryClient.invalidateQueries(scheduleKeys.all);
    },
  });

  return { mutate };
}
