import { Route } from '@angular/router';
import { TodoMainComponent } from './todo-main/todo-main.component';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('@pelnar/common-ui').then((m) => m.TodoListComponent),
    }
    ,
    {
        path: 'test1',
        component: TodoMainComponent
    }

];
