import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { STATUS } from 'src/model/status.model';
import { TodoViewModel } from 'src/viewModel/todo.viewModel';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements AfterViewInit {
  displayedColumns: string[] = ['taskName', 'status', 'deadline', 'actions'];
  dataSource = new MatTableDataSource<TodoViewModel>();
  status = STATUS;
  isEdit: boolean = false;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private todoService: TodoService
  ) {}

  @ViewChild(MatSort) sort!: MatSort | null;

  ngAfterViewInit(): void {
    if (this.dataSource) this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getTodos();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.dataSource.data = todos;
    });
  }

  addTodo(todo: TodoViewModel): void {
    const todos = this.dataSource.data;
    todos.push(todo);
    this.dataSource.data = todos;
  }

  save(todo: TodoViewModel): void {
    if (todo.isEdit) {
      todo.isEdit = !todo.isEdit;
    }
  }
}
