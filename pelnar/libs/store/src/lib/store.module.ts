import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as store1 } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodo from './+state/todo/todo.reducer';
import { TodoEffects } from './+state/todo/todo.effects';

@NgModule({
  imports: [
    CommonModule,
    store1.forFeature(fromTodo.TODO_FEATURE_KEY, fromTodo.todoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class StoreModule {}
