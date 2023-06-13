import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoEntity } from '@pelnar/model';
import { TodoState, initTodo, selectAllTodo, selectTodoLoaded } from '@pelnar/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'pelnar-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [CommonModule]

})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoEntity[]>;
  todosLoaded$: Observable<boolean>;

  constructor(private store: Store<TodoState>) {
    this.todos$ = this.store.select(selectAllTodo);
    this.todosLoaded$ = this.store.select(selectTodoLoaded);
  }

  ngOnInit(): void {
    this.store.dispatch(initTodo());
  }

  public test() {
    console.log(123);
  }
}
