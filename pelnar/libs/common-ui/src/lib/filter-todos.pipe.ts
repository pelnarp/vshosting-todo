import { Pipe, PipeTransform } from '@angular/core';
import { TodoEntity } from '@pelnar/model';

@Pipe({
  name: 'filterTodos',
  standalone: true,
})
export class FilterTodosPipe implements PipeTransform {
  transform(list: TodoEntity[] | null, filter: todoFilterType): TodoEntity[] | null {
    if (!list) return null;
    const result =  list.filter(item => filter === todoFilterType.all ? true : filter == todoFilterType.completed ? item.completed === true : item.completed === false);
    return result;
  }
}

export enum todoFilterType {
  all = 'all',
  completed = 'completed',
  incomplete = 'incomplete'
}