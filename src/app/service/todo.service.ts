import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TODOs } from 'src/mock-todo';
import { TodoModel } from 'src/model/todo.model';
import { TodoViewModel } from 'src/viewModel/todo.viewModel';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodos(): Observable<TodoViewModel[]> {
    const todos: TodoViewModel[] = TODOs.map((todo) =>
      this.changeToViewModel(todo)
    );
    return of(todos);
  }

  addTodo(todo: TodoViewModel): Observable<TodoViewModel> {
    TODOs.push(this.changeToModel(todo));
    return of(todo);
  }

  private changeToViewModel(todo: TodoModel): TodoViewModel {
    return {
      id: todo.id,
      taskName: todo.taskName,
      status: todo.status,
      deadline: todo.deadline,
      isEdit: false,
    };
  }

  private changeToModel(todo: TodoViewModel): TodoModel {
    return {
      id: todo.id,
      taskName: todo.taskName,
      status: todo.status,
      deadline: todo.deadline,
    };
  }
}
