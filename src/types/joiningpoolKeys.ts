export const joiningpoolKeys = {
  all: ["joiningpoolUsers"] as const,
  detail: (user_id: string) => [...joiningpoolKeys.all, user_id] as const,
};
