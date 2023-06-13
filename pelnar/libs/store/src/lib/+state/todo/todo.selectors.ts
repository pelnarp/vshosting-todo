import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_FEATURE_KEY, TodoState, todoAdapter } from './todo.reducer';

// Lookup the 'Todo' feature state managed by NgRx
export const selectTodoState =
  createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

const { selectAll, selectEntities } = todoAdapter.getSelectors();

export const selectTodoLoaded = createSelector(
  selectTodoState,
  (state: TodoState) => state.loaded
);

export const selectTodoError = createSelector(
  selectTodoState,
  (state: TodoState) => state.error
);

export const selectAllTodo = createSelector(
  selectTodoState,
  (state: TodoState) => selectAll(state)
);

export const selectTodoEntities = createSelector(
  selectTodoState,
  (state: TodoState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectTodoState,
  (state: TodoState) => state.selectedId
);

export const selectEntity = createSelector(
  selectTodoEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
