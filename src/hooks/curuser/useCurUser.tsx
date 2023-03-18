import { useQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { User } from '../../interfaces/user';
import { CurUserKeys } from '../../types/userKeys';

const getCurUser = async () => {
  const response = await waldregAxios.get(`/user`);
  return response.data;
};

const useCurUser = () => {
  const { data } = useQuery<User>(CurUserKeys.all, () => getCurUser());
  return data;
};

export default useCurUser;
