export const userKeys = {
  all: ['users'] as const,
  detail: (id: string) => [...userKeys.all, id] as const,
  page: (num: number) => [...userKeys.all, num] as const,
};
