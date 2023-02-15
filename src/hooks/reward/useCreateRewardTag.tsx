import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { Reward } from '../../interfaces/reward';
import { rewardKeys } from '../../types/rewardKeys';

const createRewardTag = async (newReward: Reward) => {
  await waldregAxios.post('/reward-tag', newReward);
};

const useCreateRewardTag = () => {
  const queryClient = useQueryClient();
  return useMutation(createRewardTag, {
    onSuccess: () => {
      queryClient.invalidateQueries(rewardKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useCreateRewardTag;
