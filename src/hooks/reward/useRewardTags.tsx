import { useQuery } from 'react-query';

import { waldregAxios } from '../../apis/axios';
import { Rewards } from '../../interfaces/reward';
import { rewardKeys } from '../../types/rewardKeys';

const getRewardTags = async () => {
  const response = await waldregAxios.get('/reward-tag');
  return response.data;
};

const useRewardTags = () => {
  const { data } = useQuery<Rewards>(rewardKeys.all, () => getRewardTags());
  return data?.reward_tags;
};

export default useRewardTags;
