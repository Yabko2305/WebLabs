import { Component, OnInit } from '@angular/core';
import {Rent} from '../shared/rent';
import { RentService } from '../services/rent.service';
import {ClassroomService} from '../services/classroom.service';
import {Classroom} from '../shared/Classroom';

@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit {
  rents: Rent[];
  errMess: string;
  constructor(private rentService: RentService,
              private classroomService: ClassroomService) { }
  ngOnInit(): void {
    this.rentService.getRents()
      .subscribe(rents => this.rents = rents,
        err => {
        this.errMess = err;
        console.log(err);
      },
        () => {
          this.rents.forEach(rent => {
            this.classroomService.getClassroom(rent.classroom_id)
              .subscribe(classr => rent.classroom_id = classr.classRoomNum);
          });
        }
      );
  }
}
