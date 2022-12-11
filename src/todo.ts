import { Status } from './status';

export interface TODO {
  id: number;
  taskName: string;
  detail?: string;
  status: Status;
  deadline: string;
  startedAt?: string;
  finishedAt?: string;
  relatedLink?: string;
}
