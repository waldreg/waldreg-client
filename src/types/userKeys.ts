export const userKeys = {
  all: ['users'] as const,
  search: ['users', 'search'] as const,
  detail: (id: string) => [...userKeys.all, id] as const,
  page: (num: number) => [...userKeys.all, num] as const,
};

export const CurUserKeys = {
  all: ['curUser'] as const,
};
