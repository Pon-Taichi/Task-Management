import { Status } from './status.model';

export interface TODO {
  id: number;
  taskName: string;
  detail?: string;
  status: Status;
  deadline: Date;
  startedAt?: string;
  finishedAt?: string;
  relatedLink?: string;
}
