export const characterKeys = {
  all: ["character"] as const,
  detail: (name: string) => [...characterKeys.all, name] as const,
};

export const permissionKeys = {
  all: ["permissions"] as const,
};

export const userKeys = {
  all: ["users"] as const,
  detail: (id: number) => [...userKeys.all, id] as const,
};