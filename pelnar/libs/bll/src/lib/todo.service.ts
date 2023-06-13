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
  private readonly clientId: string;

  constructor(protected httpClient: HttpClient) {
    this.baseUrl = environment.todoApiUrl + '/todos';
    this.clientId = environment.clientId;
  }

  public all(): Observable<TodoEntity[]> {
    //return of([]);
    return this.httpClient.get<TodoEntity[]>(`${this.baseUrl}`, { params: { clientId: this.clientId } });
  }

  public create(entity: TodoEntity): Observable<any> {
    const todoCopy =  structuredClone(entity) as TodoEntity;
    todoCopy.clientId = this.clientId;
    return this.httpClient.post(`${this.baseUrl}`, todoCopy);
  }

  public upsert(entity: TodoEntity): Observable<any> {
    if (entity.id) {
      return this.update(entity);
    } else {
      return this.create(entity);
    }
  }

  public update(entity: TodoEntity): Observable<any> {
    const data = {text: entity.text, completed: entity.completed};
    return this.httpClient.put(`${this.baseUrl}/${entity.id}`, data);
  }

  public delete(entity: TodoEntity): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${entity.id}`);
  }
}
