import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { userRewardKeys } from '../../types/rewardKeys';

const createUserReward = async (id: number, tagId: number) => {
  await waldregAxios.get(`/reward-tag/users?id=${id}&reward-tag-id=${tagId}`);
};

const useCreateUserReward = (id: number, tagId: number) => {
  const queryClient = useQueryClient();
  return useMutation(() => createUserReward(id, tagId), {
    onSuccess: () => {
      queryClient.invalidateQueries(userRewardKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useCreateUserReward;
