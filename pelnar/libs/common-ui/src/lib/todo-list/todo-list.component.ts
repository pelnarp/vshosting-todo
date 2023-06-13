import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoEntity } from '@pelnar/model';
import { TodoState, initTodo, selectAllTodo, selectTodoLoaded } from '@pelnar/store';
import { Observable } from 'rxjs';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { todoFilterType } from '../filter-todos.pipe';

@Component({
  selector: 'pelnar-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoEntity[]>;
  todosLoaded$: Observable<boolean>;

  public todoFilter: todoFilterType = todoFilterType.incomplete;

  public all = todoFilterType.all;
  public incomplete = todoFilterType.incomplete;
  public complete = todoFilterType.completed;

  private store = inject(Store<TodoState>);

  constructor() {
    this.todos$ = this.store.select(selectAllTodo);
    this.todosLoaded$ = this.store.select(selectTodoLoaded);
  }

  ngOnInit(): void {
    this.store.dispatch(initTodo());
  }

  filterChange($event: MatButtonToggleChange) {
    this.todoFilter = $event.value;
  }
}
