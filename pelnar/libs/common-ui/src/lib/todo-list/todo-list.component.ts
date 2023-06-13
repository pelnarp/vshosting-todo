import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoEntity } from '@pelnar/model';
import { TodoState, initTodo, selectAllTodo, selectTodoLoaded } from '@pelnar/store';
import { Observable } from 'rxjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoEditorComponent } from '../todo-editor/todo-editor.component';
import { FilterTodosPipe, todoFilterType } from '../filter-todos.pipe';

@Component({
  selector: 'pelnar-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    TodoItemComponent,
    TodoEditorComponent,
    FilterTodosPipe]

})
export class TodoListComponent implements OnInit {
  todos$: Observable<TodoEntity[]>;
  todosLoaded$: Observable<boolean>;

  public todoFilter: todoFilterType = todoFilterType.incomplete;

  public todoFilterTypeValues = todoFilterType;

  constructor(private store: Store<TodoState>) {
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
