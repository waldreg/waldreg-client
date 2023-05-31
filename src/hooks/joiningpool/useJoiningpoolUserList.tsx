import { Users } from "../../interfaces/user";
import { useQuery } from "react-query";
import { userKeys } from "../../types/userKeys";
import { waldregAxios } from "../../apis/axios";

const getJoiningpoolUserList = async (startIdx: number, endIdx: number) => {
  const response = await waldregAxios.get(
    `/user/joiningpool?from=${startIdx}&to=${endIdx}`
  );
  return response.data;
};

const useJoiningpoolUserList = (startIdx: number, endIdx: number) => {
  const { data } = useQuery<Users>(userKeys.page(startIdx), () =>
    getJoiningpoolUserList(startIdx, endIdx)
  );
  return data;
};

export default useJoiningpoolUserList;
