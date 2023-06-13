import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { TodoEntity } from '@pelnar/model';
import { TodoEditorComponent } from '../todo-editor/todo-editor.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { TodoState, update } from '@pelnar/store';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'pelnar-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatListModule,
    TodoEditorComponent,
    CommonModule,
    MatCardModule,
  ]
})
export class TodoItemComponent {

  @Input() todo!: TodoEntity;
  @Output() completedChange = new EventEmitter<any>();
  editing = false;

  constructor(private store: Store<TodoState>) {
  }

  edit() {
    this.editing = true;
  }

  onDone() {
    this.editing = false;
  }

  checkChange($event: any) {
    const todoCopy = structuredClone(this.todo) as TodoEntity;
    todoCopy.completed = $event.checked;
    this.store.dispatch(update({ todo: todoCopy }));
  }
}
