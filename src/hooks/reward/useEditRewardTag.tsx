import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { Reward } from '../../interfaces/reward';
import { rewardKeys } from '../../types/rewardKeys';

const editRewardTag = async ({
  id,
  newReward,
}: {
  id: number;
  newReward: Reward;
}) => {
  await waldregAxios.put(`/reward-tag/${id}`, newReward);
};

const useEditRewardTag = () => {
  const queryClient = useQueryClient();
  return useMutation(editRewardTag, {
    onSuccess: () => {
      queryClient.invalidateQueries(rewardKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useEditRewardTag;
