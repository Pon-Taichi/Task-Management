import { STATUS } from './model/status.model';
import { TODO } from './model/todo.model';

export const TODOs: TODO[] = [
  {
    id: 1,
    taskName: 'task1',
    status: STATUS.NEW,
    deadline: new Date('10/01/2022'),
  },
  {
    id: 2,
    taskName: 'task2',
    status: STATUS.IN_PROGRESS,
    deadline: new Date('12/01/2022'),
  },
  {
    id: 3,
    taskName: 'task3',
    status: STATUS.DONE,
    deadline: new Date('11/01/2022'),
  },
];
