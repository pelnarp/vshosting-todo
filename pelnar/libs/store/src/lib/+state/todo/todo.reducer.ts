import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TodoActions from './todo.actions';
import { TodoEntity } from '@pelnar/model';

export const TODO_FEATURE_KEY = 'todo';

export interface TodoState extends EntityState<TodoEntity> {
  selectedId?: string | number; // which Todo record has been selected
  loaded: boolean; // has the Todo list been loaded
  error?: string | null; // last known error (if any)
}

export interface TodoPartialState {
  readonly [TODO_FEATURE_KEY]: TodoState;
}

export const todoAdapter: EntityAdapter<TodoEntity> =
  createEntityAdapter<TodoEntity>();

export const initialTodoState: TodoState = todoAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialTodoState,
  on(TodoActions.initTodo, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(TodoActions.loadTodoSuccess, (state, { todo }) =>
    todoAdapter.setAll(todo, { ...state, loaded: true })
  ),
  on(TodoActions.loadTodoFailure, (state, { error }) => ({ ...state, error })),
  on(TodoActions.updateSuccess, (state, { todo }) =>
    todoAdapter.setOne(todo, { ...state, loaded: true })
  ),
  on(TodoActions.createSuccess, (state, { todo }) =>
    todoAdapter.addOne(todo, { ...state, loaded: true })
  ),
  on(TodoActions.deleteSuccess, (state, { id }) =>
    todoAdapter.removeOne(id, { ...state, loaded: true })
  ),

);

export function todoReducer(state: TodoState | undefined, action: Action) {
  return reducer(state, action);
}
