import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RentService} from './services/rent.service';
import {ClassroomService} from './services/classroom.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MyrentsComponent } from './myrents/myrents.component';
import { RentsComponent } from './rents/rents.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {RegistrationComponent} from './registration/registration.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { MatDialogModule } from '@angular/material/dialog';
import { EditRentComponent } from './edit-rent/edit-rent.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MyrentsComponent,
    RegistrationComponent,
    RentsComponent,
    EditRentComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    MatSelectModule,
    OwlDateTimeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    OwlNativeDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [
    RentService,
    ClassroomService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent],
})
export class AppModule { }
