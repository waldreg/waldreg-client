import { useMutation } from "react-query";
import { waldregAxios as axios } from "../../apis/axios";
import { Schedule } from "../../interfaces/schedule";

async function scheduleCreate(schedule: Schedule): Promise<void> {
  await axios.post(`/schedule`, schedule);
}

interface UseScheduleCreate {
  mutate: () => void;
}

export function useScheduleCreate(schedule: Schedule): UseScheduleCreate {
  const { mutate } = useMutation(() => scheduleCreate(schedule));
  return { mutate };
}
