import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TodoEntity } from '@pelnar/model';
import { Store } from '@ngrx/store';
import { TodoState, update } from '@pelnar/store';


@Component({
  selector: 'pelnar-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {

  @Input() todo!: TodoEntity;
  @Output() completedChange = new EventEmitter<any>();
  editing = false;

  private store = inject(Store<TodoState>);

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
