export const joiningpoolUserKeys = {
  all: ["joiningpoolUsers"] as const,
  search: ["joiningpoolUsers", "search"] as const,
  detail: (id: string) => [...joiningpoolUserKeys.all, id] as const,
  page: (num: number) => [...joiningpoolUserKeys.all, num] as const,
};
