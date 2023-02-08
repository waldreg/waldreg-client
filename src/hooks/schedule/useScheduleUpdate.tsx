import { useMutation } from "react-query";
import { waldregAxios as axios } from "../../apis/axios";
import { Schedule } from "../../interfaces/schedule";

// async function ScheduleUpdate(
//   schedule: Schedule,
//   schedule_id: number
// ): Promise<void> {
//   const { data } = await axios.put(`/schedule/${schedule_id}`, schedule);
//   return data;
// }

// interface UseScheduleUpdate {
//   schedule_title: string;
//   schedule_content: string;
//   started_at: string;
//   finish_at: string;
// }

// export function useScheduleUpdate(
//   schedule: Schedule,
//   schedule_id: number
// ): UseScheduleUpdate {
//   const { mutate } = useMutation(() => ScheduleUpdate(schedule, schedule_id));
//   return { mutate };
// }
