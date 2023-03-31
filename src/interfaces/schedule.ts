export interface Schedule {
  id?: number;
  schedule_title: string;
  schedule_content: string;
  started_at: string;
  finish_at: string;
  repeat: {
    cycle: number;
    repeat_finish_at: string;
  };
}

export interface ScheduleLists extends Schedule {
  schedules: Schedule[];
}
