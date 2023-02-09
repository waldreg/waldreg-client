export const scheduleKeys = {
  all: ["schedules"] as const,
  detail: (id: number) => [...scheduleKeys.all, id] as const,
};
