import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Classroom} from '../shared/Classroom';
import {ClassroomService} from '../services/classroom.service';
import {RentService} from '../services/rent.service';

@Component({
  selector: 'app-edit-rent',
  templateUrl: './edit-rent.component.html',
  styleUrls: ['./edit-rent.component.css']
})
export class EditRentComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private classroomservice: ClassroomService,
              private rentservice: RentService) { }

  classrooms: Classroom[] = [];
  rentToSubmit = this.data.rent;
  reservationFormData = {
    classroom: '',
    startDate: this.rentToSubmit.startDate,
    endDate: this.rentToSubmit.endDate,
  };
  ngOnInit(): void {
    this.classroomservice.getAllClassrooms()
      .subscribe(classrooms => this.classrooms = classrooms,
        err => console.log(err));
  }

  onEdit(){
    this.rentToSubmit.classroom_id = String(this.classrooms
      .filter(classroom => String(classroom.classRoomNum) === String(this.reservationFormData.classroom))[0].id);
    this.rentToSubmit.user_id = localStorage.getItem('id');
    this.rentToSubmit.startDate = this.reservationFormData.startDate;
    this.rentToSubmit.endDate = this.reservationFormData.endDate;
    this.rentservice.editRent(this.rentToSubmit.id, this.rentToSubmit)
      .subscribe(res => console.log(res),
        err => console.log(err),
        () => window.location.reload() );
  }

}
