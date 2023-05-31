import { JoiningpoolUsers } from "../../interfaces/joiningpoolUser";
import { joiningpoolUserKeys } from "../../types/joiningpoolKeys";
import { useQuery } from "react-query";
import { waldregAxios } from "../../apis/axios";

const getJoiningpoolUserList = async (startIdx: number, endIdx: number) => {
  const response = await waldregAxios.get(
    `/user/joiningpool?from=${startIdx}&to=${endIdx}`
  );
  return response.data;
};

const useJoiningpoolUserList = (startIdx: number, endIdx: number) => {
  const { data } = useQuery<JoiningpoolUsers>(
    joiningpoolUserKeys.page(startIdx),
    () => getJoiningpoolUserList(startIdx, endIdx)
  );
  return data;
};

export default useJoiningpoolUserList;
