export const rewardKeys = {
  all: ['reward'] as const,
};

export const userRewardKeys = {
  all: ['userReward'] as const,
  detail: (id: number) => [...userRewardKeys.all, id] as const,
};
