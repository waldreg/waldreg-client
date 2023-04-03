import { useQuery, useQueryClient } from "react-query";
import { waldregAxios as axios } from "../../apis/axios";
import { scheduleKeys } from "../../types/scheduleKeys";

async function getScheduleList(year: number, month: number): Promise<any> {
  const { data } = await axios.get(`/calendar?year=${year}&month=${month}`);
  return data;
}

interface UseScheduleList {
  scheduleList?: any;
  refreshScheduleList?: () => void;
}

export function useScheduleList(year: number, month: number): UseScheduleList {
  const queryClient = useQueryClient();

  const { data: scheduleList } = useQuery<any>(
    scheduleKeys.current(year, month),
    () => getScheduleList(year, month)
  );

  const refreshScheduleList = async () => {
    await queryClient.invalidateQueries(scheduleKeys.current(year, month));
  };

  return { scheduleList, refreshScheduleList };
}
