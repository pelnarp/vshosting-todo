import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { TodoEntity } from '@pelnar/model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly baseUrl: string;

  constructor(protected httpClient: HttpClient) {
    this.baseUrl = environment.todoApiUrl;
  }

  public all(): Observable<TodoEntity[]>  {
    return of([]);
    //return this.httpClient.get<TodoEntity[]>(`${this.baseUrl}`);
  }
}
