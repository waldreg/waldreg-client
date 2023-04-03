export const scheduleKeys = {
  all: ["schedules"] as const,
  current: (year: number, month: number) => ["schedules", year, month],
  detail: (id: number) => [...scheduleKeys.all, id] as const,
};
