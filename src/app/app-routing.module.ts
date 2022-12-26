import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  {
    path: 'todo',
    component: TodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
