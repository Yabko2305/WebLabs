import {Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerUserData = {
    email: '',
    username: '',
    password1: '',
    password2: '',
    firstname: '',
    secondname: ''
  };
  private error: any;
  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
  }
  registerUser(){
    this.auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.key);
        },
        err => this.error = err,
        () => {
          if (!this.error)
          {
            this.router.navigate(['/home']);
          } else {
            console.log(this.error);
          }
        }
      );
  }

}
