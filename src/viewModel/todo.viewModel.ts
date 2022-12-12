import { Status } from 'src/model/status.model';

export type TodoViewModel = {
  id: number;
  taskName: string;
  status: Status;
  deadline: Date;
  isEdit: boolean;
};
