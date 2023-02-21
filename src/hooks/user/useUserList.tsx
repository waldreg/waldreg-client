import { useQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { Users } from '../../interfaces/user';
import { userKeys } from '../../types/userKeys';

const getUserList = async (startIdx: number, endIdx: number) => {
  const response = await waldregAxios.get(
    `/users?from=${startIdx}&to=${endIdx}`
  );
  return response.data;
};

const useUserList = (startIdx: number, endIdx: number) => {
  const { data } = useQuery<Users>(userKeys.page(startIdx), () =>
    getUserList(startIdx, endIdx)
  );
  return data;
};

export default useUserList;
