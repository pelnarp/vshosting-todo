import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoEntity } from '@pelnar/model';
import { TodoState, selectAllTodo, selectTodoEntities } from '@pelnar/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'pelnar-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true
})
export class TodoListComponent {
  todos$: Observable<TodoEntity[]>;

  constructor(private store: Store<TodoState>) {
    this.todos$ = this.store.select(selectAllTodo);
  }


}
