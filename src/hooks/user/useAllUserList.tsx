import { Users } from "../../interfaces/user";
import { useQuery } from "react-query";
import { userKeys } from "../../types/userKeys";
import { waldregAxios } from "../../apis/axios";

const getUserList = async (startIdx: number, endIdx: number) => {
  const response = await waldregAxios.get(
    `/users?from=${startIdx}&to=${endIdx}`
  );
  return response.data;
};

const useAllUserList = (startIdx: number, endIdx: number) => {
  const { data } = useQuery<Users>(userKeys.all, () =>
    getUserList(startIdx, endIdx)
  );
  return data;
};

export default useAllUserList;
