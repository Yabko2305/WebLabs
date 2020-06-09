import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../shared/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<User>{
    return this.http.get<User>('http://127.0.0.1:8000/users/' + username);
  }
}
