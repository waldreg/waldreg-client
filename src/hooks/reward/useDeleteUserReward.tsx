import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { userRewardKeys } from '../../types/rewardKeys';

const deleteUserReward = async (id: number, rewardId: number) => {
  await waldregAxios.delete(`/reward-tag/user?id=${id}&reward-id=${rewardId}`);
};

const useDeleteUserReward = (id: number, rewardId: number) => {
  const queryClient = useQueryClient();
  return useMutation(() => deleteUserReward(id, rewardId), {
    onSuccess: () => {
      queryClient.invalidateQueries(userRewardKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useDeleteUserReward;
