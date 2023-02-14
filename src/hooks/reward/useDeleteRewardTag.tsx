import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { rewardKeys } from '../../types/rewardKeys';

const deleteRewardTag = async (id: number) => {
  await waldregAxios.delete(`/reward-tag/${id}`);
};

const useDeleteRewardTag = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteRewardTag, {
    onSuccess: () => {
      queryClient.invalidateQueries(rewardKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useDeleteRewardTag;
