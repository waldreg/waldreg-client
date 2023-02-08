import { useQuery } from "react-query";
import { ScheduleLists } from "./../../interfaces/schedule";
import { waldregAxios as axios } from "../../apis/axios";
import { scheduleKeys } from "../../types/scheduleKye";

async function getScheduleList(
  year: number,
  month: number,
  day: number
): Promise<ScheduleLists> {
  const { data } = await axios.get(
    `/calendar?year=${year}&month=${month}&day=${day}`
  );
  return data;
}

interface UseScheduleList {
  scheduleList?: ScheduleLists;
}

export function useScheduleList(
  year: number,
  month: number,
  day: number
): UseScheduleList {
  const { data: scheduleList } = useQuery<ScheduleLists>(scheduleKeys.all, () =>
    getScheduleList(year, month, day)
  );
  return { scheduleList };
}
