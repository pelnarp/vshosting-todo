import { createAction, props } from '@ngrx/store';
import { TodoEntity } from '@pelnar/model';

export const initTodo = createAction('[Todo Page] Init');

export const loadTodoSuccess = createAction(
  '[Todo/API] Load Todo Success',
  props<{ todo: TodoEntity[] }>()
);

export const loadTodoFailure = createAction(
  '[Todo/API] Load Todo Failure',
  props<{ error: any }>()
);
