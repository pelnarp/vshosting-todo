import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TodoEntity } from '@pelnar/model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TodoState, create, deleteSingle, update } from '@pelnar/store';
import { Store } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'pelnar-todo-editor',
  templateUrl: './todo-editor.component.html',
  styleUrls: ['./todo-editor.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatIconModule]
})
export class TodoEditorComponent implements OnInit {
  @Input() todo: TodoEntity = new TodoEntity();

  @Output() done = new EventEmitter();

  text = new FormControl('');

  constructor(private store: Store<TodoState>) {
  }
  ngOnInit(): void {
    this.text.setValue(this.todo.text ?? null);
  }

  save() {
    const todoCopy = structuredClone(this.todo) as TodoEntity;
    todoCopy.text = this.text.value;
    if (todoCopy.id !== undefined) {
      this.store.dispatch(update({ todo: todoCopy }));
    } else {
      this.store.dispatch(create({ todo: todoCopy }));
    }
    this.text.setValue(null);
    this.done.next(null);
  }

  delete() {
    if (this.todo.id)
      this.store.dispatch(deleteSingle({ id: this.todo.id }));

    this.done.next(null);
  }
}
