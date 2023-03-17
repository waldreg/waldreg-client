export interface Reward {
  reward_tag_title: string;
  reward_point: number;
}

export interface RewardWithId extends Reward {
  reward_tag_id: number;
}

export interface Rewards {
  reward_tags: RewardWithId[];
}

export interface UserRewards {
  id: number;
  name: string;
  user_id: string;
  reward: number;
  reward_infos: {
    reward_id: number;
    reward_tag_id: number;
    reward_tag_title: string;
    reward_presented_at: string;
    reward_point: number;
  };
}
