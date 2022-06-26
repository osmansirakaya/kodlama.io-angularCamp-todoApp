import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }
  getPosts():Observable<Post[]>{
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
