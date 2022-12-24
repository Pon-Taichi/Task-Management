import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { STATUS } from 'src/model/status.model';
import { TodoViewModel } from 'src/viewModel/todo.viewModel';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addTodo(taskName: string) {
    const todo: TodoViewModel = {
      id: '',
      taskName: taskName,
      status: 'New',
      deadline: new Date(),
      isEdit: false,
    };

    this.todoService.addTodo(todo).subscribe();
  }
}
