import { Component, OnInit } from '@angular/core';
import {RentService} from '../services/rent.service';
import {ClassroomService} from '../services/classroom.service';
import {Rent} from '../shared/rent';
import {UserService} from '../services/user.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EditRentComponent } from '../edit-rent/edit-rent.component';

@Component({
  selector: 'app-myrents',
  templateUrl: './myrents.component.html',
  styleUrls: ['./myrents.component.css']
})
export class MyrentsComponent implements OnInit {
  rents: Rent[];
  errMess: string;
  constructor(private rentService: RentService,
              private classroomService: ClassroomService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.rentService.getRentsOfUserByUserId(localStorage.getItem('id'))
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

  onDelete(rent: Rent): void{
    this.rentService.deleteRent(rent.id)
      .subscribe(res => console.log(res),
                  err => console.log(err),
        () => window.location.reload()
      );
  }

  onEdit(rent: Rent){
      this.dialog.open(EditRentComponent, {width: '500px', height: '450px',
      data: {
        rent
      }});
  }

}
