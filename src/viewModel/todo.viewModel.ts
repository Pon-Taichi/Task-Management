import { Status } from 'src/model/status.model';

export type TodoViewModel = {
  id: string;
  taskName: string;
  status: Status;
  deadline: Date;
  isEdit: boolean;
};
