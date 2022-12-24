import { Status } from './status.model';

export type TodoModel = {
  id: string;
  taskName: string;
  status: Status;
  deadline: Date;
};
