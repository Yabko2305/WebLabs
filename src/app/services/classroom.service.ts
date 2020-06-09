import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Classroom} from '../shared/Classroom';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  classroomUrl = 'http://127.0.0.1:8000/models/classrooms/';
  constructor(private http: HttpClient) { }

  getClassroom(id: string): Observable<Classroom>{
    return this.http.get<Classroom>(this.classroomUrl + id + '/');
  }

  getAllClassrooms(): Observable<Classroom[]>{
    return this.http.get<Classroom[]>(this.classroomUrl);
  }
}
