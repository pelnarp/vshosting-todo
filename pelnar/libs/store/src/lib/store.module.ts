import { NgModule } from '@angular/core';
import { StoreModule as store1 } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodo from './+state/todo/todo.reducer';
import { TodoEffects } from './+state/todo/todo.effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    store1.forFeature(fromTodo.TODO_FEATURE_KEY, fromTodo.todoReducer),
    EffectsModule.forFeature([TodoEffects]),
    MatSnackBarModule
  ],
})
export class StoreModule {
  constructor() {
  }
}
