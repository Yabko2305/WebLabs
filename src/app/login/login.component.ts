import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    username: '',
    password: ''
  };
  username: string;
  constructor(private auth: AuthService, private router: Router,
              private  userService: UserService) { }
  ngOnInit(): void {
  }
  loginUser(){
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.key);
          localStorage.setItem('username', this.loginUserData.username);
          this.username = this.loginUserData.username;
        },
        err => console.log(err),
        () => {
          this.userService.getUserByUsername(localStorage.getItem('username'))
            .subscribe(user => localStorage.setItem('id', user.id),
              err => console.log(err));
          this.navigateToHome();
        }
      );
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }
}
