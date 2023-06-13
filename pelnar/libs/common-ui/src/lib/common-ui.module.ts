import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [CommonModule, TodoListComponent],
  declarations: [],
  exports: [TodoListComponent],
})
export class CommonUiModule {}
