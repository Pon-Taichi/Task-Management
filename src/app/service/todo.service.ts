import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TODOs } from 'src/mock-todo';
import { TodoViewModel } from 'src/viewModel/todo.viewModel';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos(): Observable<TodoViewModel[]> {
    const todos: TodoViewModel[] = TODOs.map((todo) => ({
      id: todo.id,
      taskName: todo.taskName,
      status: todo.status,
      deadline: todo.deadline,
      isEdit: false,
    }));
    return of(todos);
  }
}
