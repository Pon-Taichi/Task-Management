export const STATUS = {
  NEW: 'New',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
} as const;

export type Status = typeof STATUS[keyof typeof STATUS];
