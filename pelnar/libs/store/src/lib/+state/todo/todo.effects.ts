import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as TodoActions from './todo.actions';
import { TodoService } from '@pelnar/bll';

@Injectable()
export class TodoEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.initTodo),
      switchMap(() =>
        this.todoService.all().pipe(
          map((todos) => TodoActions.loadTodoSuccess({ todo: todos })),
        )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(TodoActions.loadTodoFailure({ error }));
      })
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.update),
      switchMap((action) =>
        this.todoService.update(action.todo).pipe(
          map((todo) => TodoActions.updateSuccess({ todo: todo })),
        )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(TodoActions.updateFailure({ error }));
      })
    )
  );

  updateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.updateSuccess),
      map(() => { // TODO: snack 
      })
    ), { dispatch: false }
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.create),
      switchMap((action) =>
        this.todoService.create(action.todo).pipe(
          map((todo) => TodoActions.createSuccess({ todo: todo })),
        )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(TodoActions.createFailure({ error }));
      })
    )
  );

  reateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.createSuccess),
      map(() => { // TODO: snack 
      })
    ), { dispatch: false }
  );


  constructor(private readonly todoService: TodoService) {
  }
}
