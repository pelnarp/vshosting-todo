import { Route } from '@angular/router';
import { TodoMainComponent } from './todo-main/todo-main.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: TodoMainComponent
    }
];
