import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as TodoActions from './todo.actions';
import { TodoService } from '@pelnar/bll';
import { MatSnackBar } from '@angular/material/snack-bar';

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
      map(() => {
        this.snackBar.open('Item was updated', 'X', {
          duration: 3000,
        });
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

  createSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.createSuccess),
      map(() => {
        this.snackBar.open('Item was created', 'X', {
          duration: 3000,
        });
      })
    ), { dispatch: false }
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteSingle),
      switchMap((action) =>
        this.todoService.delete(action.id).pipe(
          map((id) => TodoActions.deleteSuccess({ id: action.id })),
        )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(TodoActions.createFailure({ error }));
      })
    )
  );

  deleteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteSuccess),
      map(() => {
        this.snackBar.open('Item was deleted', 'X', {
          duration: 3000,
        });
      })
    ), { dispatch: false }
  );

  private todoService = inject(TodoService);
  private snackBar = inject(MatSnackBar); // This could go into dedicated wrapped notificaiton service, but I keep it directly here for simplicity
}
