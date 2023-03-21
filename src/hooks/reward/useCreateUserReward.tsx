import { useMutation, useQueryClient } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { userRewardKeys } from '../../types/rewardKeys';
import { userKeys } from '../../types/userKeys';

const createUserReward = async (id: number[], tagId: number) => {
  await waldregAxios.get(
    `/reward-tag/users?id=${id.join(', ')}&reward-tag-id=${tagId}`
  );
};

const useCreateUserReward = (id: number[], tagId: number) => {
  const queryClient = useQueryClient();
  return useMutation(() => createUserReward(id, tagId), {
    onSuccess: () => {
      queryClient.invalidateQueries(userRewardKeys.all);
      queryClient.invalidateQueries(userKeys.all);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useCreateUserReward;
