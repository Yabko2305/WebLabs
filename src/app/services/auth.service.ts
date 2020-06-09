import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'http://127.0.0.1:8000/auth/registration/';
  private loginUrl = 'http://127.0.0.1:8000/auth/login/';

  constructor(private http: HttpClient) {
  }
  registerUser(user){
    return this.http.post<any>(this.registerUrl, user);
  }
  loginUser(user){
    return this.http.post<any>(this.loginUrl, user);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('username');
    return localStorage.removeItem('token');
  }
}



