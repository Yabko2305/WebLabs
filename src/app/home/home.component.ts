import { Component, OnInit } from '@angular/core';
import {Classroom} from '../shared/Classroom';
import { ClassroomService } from '../services/classroom.service';
import {RentService} from '../services/rent.service';
import {Rent} from '../shared/rent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reservationFormData = {
    classroom: '',
    startDate: Date(),
    endDate: Date(),
  };
  rentToSubmit: Rent = new Rent();
  constructor(private classroomservice: ClassroomService,
              private rentservice: RentService) {}

  classrooms: Classroom[] = [];

  ngOnInit(): void {
    this.classroomservice.getAllClassrooms()
      .subscribe(classrooms => this.classrooms = classrooms,
            err => console.log(err));
  }

  onPost(){
    this.rentToSubmit.classroom_id = String(this.classrooms
      .filter(classroom => String(classroom.classRoomNum) === String(this.reservationFormData.classroom))[0].id);
    this.rentToSubmit.user_id = localStorage.getItem('id');
    this.rentToSubmit.startDate = this.reservationFormData.startDate;
    this.rentToSubmit.endDate = this.reservationFormData.endDate;
    this.rentservice.addRent(this.rentToSubmit)
      .subscribe(res => console.log(res),
                 err => console.log(err));
  }
}
