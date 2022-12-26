import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewMode, VIEW_MODE } from 'src/model/view-mode.model';

import { TodoViewModel } from 'src/viewModel/todo.viewModel';
import { TodoService } from '../service/todo.service';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  viewMode: ViewMode = VIEW_MODE.LIST;

  @ViewChild(TodoListComponent) private todoListComponent!: TodoListComponent;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addTodo(taskName: string): void {
    const todo: TodoViewModel = {
      id: '4',
      taskName: taskName,
      status: 'New',
      deadline: new Date(),
      isEdit: false,
    };

    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todoListComponent.addTodo(todo);
    });
  }

  showTodoList(): void {
    this.viewMode = VIEW_MODE.LIST;
  }
  showCompletedTasks(): void {
    this.viewMode = VIEW_MODE.COMPLETED;
  }
}
