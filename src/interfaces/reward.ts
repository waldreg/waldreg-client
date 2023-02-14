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
