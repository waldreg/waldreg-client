import { useQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { User } from '../../interfaces/user';
import { userKeys } from '../../types/userKeys';

const getUser = async (userId: string) => {
  const response = await waldregAxios.get(`/user/${userId}`);
  return response.data;
};

const useUser = (userId: string) => {
  const { data } = useQuery<User>(userKeys.detail(userId), () =>
    getUser(userId)
  );
  return data;
};

export default useUser;
