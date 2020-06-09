import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Rent} from '../shared/rent';
import { MyrentsComponent } from './myrents.component';
import { Component, OnInit } from '@angular/core';
import {RentService} from '../services/rent.service';
import {ClassroomService} from '../services/classroom.service';
import {UserService} from '../services/user.service';
import {MatDialogModule} from '@angular/material/dialog';
import { EditRentComponent } from '../edit-rent/edit-rent.component';
import {observable} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';

describe('MyrentsComponent', () => {
  let component: MyrentsComponent;
  let fixture: ComponentFixture<MyrentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule
      ],
      declarations: [
        MyrentsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check delete', () => {
    expect(component.onDelete).toBeTruthy();
  });
});
