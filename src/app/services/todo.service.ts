import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
