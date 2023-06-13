import { TodoEntity } from './todo.models';
import {
  todoAdapter,
  TodoPartialState,
  initialTodoState,
} from './todo.reducer';
import * as TodoSelectors from './todo.selectors';

describe('Todo Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTodoId = (it: TodoEntity) => it.id;
  const createTodoEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TodoEntity);

  let state: TodoPartialState;

  beforeEach(() => {
    state = {
      todo: todoAdapter.setAll(
        [
          createTodoEntity('PRODUCT-AAA'),
          createTodoEntity('PRODUCT-BBB'),
          createTodoEntity('PRODUCT-CCC'),
        ],
        {
          ...initialTodoState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Todo Selectors', () => {
    it('selectAllTodo() should return the list of Todo', () => {
      const results = TodoSelectors.selectAllTodo(state);
      const selId = getTodoId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = TodoSelectors.selectEntity(state) as TodoEntity;
      const selId = getTodoId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectTodoLoaded() should return the current "loaded" status', () => {
      const result = TodoSelectors.selectTodoLoaded(state);

      expect(result).toBe(true);
    });

    it('selectTodoError() should return the current "error" state', () => {
      const result = TodoSelectors.selectTodoError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
