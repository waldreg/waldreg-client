import { useQuery } from "react-query";
import { waldregAxios as axios } from "../../apis/axios";
import { Schedule } from "../../interfaces/schedule";
import { scheduleKeys } from "../../types/scheduleKeys";

async function getScheduleDetail(schedule_id: number): Promise<Schedule> {
  const { data } = await axios.get(`/schedule/${schedule_id}`);
  return data;
}

interface UseScheduleDetail {
  scheduleDetail?: Schedule;
}

export function useScheduleDetail(schedule_id: number): UseScheduleDetail {
  const { data: scheduleDetail } = useQuery<Schedule>(
    scheduleKeys.detail(schedule_id),
    () => getScheduleDetail(schedule_id)
  );
  return { scheduleDetail };
}
