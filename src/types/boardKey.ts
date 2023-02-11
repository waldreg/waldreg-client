export const boardKeys = {
  all: ["boards"] as const,
  detail: (id: number) => [...boardKeys.all, id] as const,
};

export const boardCategoryKeys = {
  all: ["boardCategories"] as const,
  detail: (id: number) => [...boardCategoryKeys.all, id] as const,
};
