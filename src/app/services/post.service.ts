import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Token } from '../interfaces/token';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer  ' + localStorage.getItem('token')
  })
};


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl = 'https://jsonplaceholder.typicode.com/posts';
  private tokenUrl = 'http://192.168.1.29:8000/api/login';
  private userUrl = 'http://192.168.1.29:8000/api/details';
  
  constructor(private http: HttpClient) { }

  getPost (): Observable<Post[]> {    
    return this.http.get<Post[]>(this.postUrl);
  }

  getToken (): Observable<Token> {
    return this.http.post<Token>(this.tokenUrl, {
      "email" : "mohan@gmail.com",
      "password" : "mohanraj"
    });
  }

  getUser () {
    return this.http.post(this.userUrl, {});
  }
}
