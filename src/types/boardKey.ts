export const boardKeys = {
  all: ["posts"] as const,
  detail: (id: number) => [...boardKeys.all, id] as const,
};

export const boardCategoryKeys = {
  all: ["boardCategories"] as const,
};
