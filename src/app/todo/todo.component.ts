import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TODOs } from 'src/mock-todo';
import { STATUS } from 'src/status';
import { TODO } from 'src/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements AfterViewInit {
  displayedColumns: string[] = ['taskName', 'status', 'deadline', 'actions'];
  todos = new MatTableDataSource(TODOs);
  status = STATUS;
  isEdit: boolean = false;
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort | null;

  ngAfterViewInit(): void {
    this.todos.sort = this.sort;
  }

  ngOnInit(): void {}

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  log(todo: TODO) {
    console.log(todo);
    console.log(todo.deadline);
  }
}
