import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { userRewardKeys } from '../../types/rewardKeys';

const deleteAllUserReward = async () => {
  await waldregAxios.get(`/reward-tag/users/reset`);
};

const useDeleteAllUserReward = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteAllUserReward, {
    onSuccess: () => {
      queryClient.invalidateQueries(userRewardKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useDeleteAllUserReward;
