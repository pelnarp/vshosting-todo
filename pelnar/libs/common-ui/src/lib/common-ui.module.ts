import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [TodoListComponent, CommonModule],
  declarations: [],
  exports: [TodoListComponent, CommonModule],
})
export class CommonUiModule {}
