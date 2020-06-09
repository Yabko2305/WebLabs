import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import {MyrentsComponent} from '../myrents/myrents.component';
import {RentsComponent} from '../rents/rents.component';
import { RegistrationComponent} from '../registration/registration.component';
import {AuthGuard} from '../auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'myrents', component: MyrentsComponent, canActivate: [AuthGuard]},
  { path: 'rents', component: RentsComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegistrationComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];
