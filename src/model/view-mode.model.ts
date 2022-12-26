export const VIEW_MODE = {
  LIST: 0,
  COMPLETED: 1,
} as const;

export type ViewMode = typeof VIEW_MODE[keyof typeof VIEW_MODE];
