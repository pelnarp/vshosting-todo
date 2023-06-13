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

export const update = createAction(
  '[Todo/API] Update',
  props<{ todo: TodoEntity }>()
);

export const updateSuccess = createAction(
  '[Todo/API] Save Success',
  props<{ todo: TodoEntity }>()
);

export const updateFailure = createAction(
  '[Todo/API] Save Failure',
  props<{ error: any }>()
);

export const create = createAction(
  '[Todo/API] Create',
  props<{ todo: TodoEntity }>()
);

export const createSuccess = createAction(
  '[Todo/API] Create Success',
  props<{ todo: TodoEntity }>()
);

export const createFailure = createAction(
  '[Todo/API] Create Failure',
  props<{ error: any }>()
);

export const deleteSingle = createAction(
  '[Todo/API] Delete',
  props<{ id: number }>()
);

export const deleteSuccess = createAction(
  '[Todo/API] Delete Success',
  props<{ id: number }>()
);

export const deleteFailure = createAction(
  '[Todo/API] Delete Failure',
  props<{ error: any }>()
);