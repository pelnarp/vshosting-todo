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

  /**
   *
   */
  constructor(private readonly todoService: TodoService) {
  }
}
