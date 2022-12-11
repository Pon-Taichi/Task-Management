import { STATUS } from './status';
import { TODO } from './todo';

export const TODOs: TODO[] = [
  {
    id: 1,
    taskName: 'task1',
    status: STATUS.NEW,
    deadline: '2022-10-01',
  },
  {
    id: 2,
    taskName: 'task2',
    status: STATUS.IN_PROGRESS,
    deadline: '2022-12-01',
  },
  {
    id: 3,
    taskName: 'task3',
    status: STATUS.DONE,
    deadline: '2022-11-01',
  },
];
