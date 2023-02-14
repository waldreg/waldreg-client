import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { userKeys } from '../../types/userKeys';

const kickUser = async (id: number) => {
  await waldregAxios.delete(`/user/${id}`);
};

const useKickUser = () => {
  const queryClient = useQueryClient();
  return useMutation(kickUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useKickUser;
