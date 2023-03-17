import { useQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { UserRewards } from '../../interfaces/reward';
import { userRewardKeys } from '../../types/rewardKeys';

const getUserReward = async (id: number) => {
  const response = await waldregAxios.get(`/reward-tag/user/${id}`);
  return response.data;
};

const useUserReward = (id: number) => {
  const { data } = useQuery<UserRewards>(userRewardKeys.detail(id), () =>
    getUserReward(id)
  );
  return data;
};

export default useUserReward;
