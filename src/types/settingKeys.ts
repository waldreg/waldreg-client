export const characterKeys = {
  all: ['character'] as const,
  detail: (name: string) => [...characterKeys.all, name] as const,
};

export const permissionKeys = {
  all: ['permissions'] as const,
};
