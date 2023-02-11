export const boardKeys = {
  all: ["boards"] as const,
  detail: (id: number) => [...boardKeys.all, id] as const,
};
