import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Rent} from '../shared/rent';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RentService {
  private rentsUrl = 'http://127.0.0.1:8000/models/reservations/';
  constructor(private http: HttpClient) {}

  getRents(): Observable<Rent[]> {
    return this.http.get<Rent[]>(this.rentsUrl);
  }

  getRentsOfUserByUserId(id: string): Observable<Rent[]>{
    return this.http.get<Rent[]>(this.rentsUrl + '?user_id=' + id)
      .pipe(map(rents => rents.filter(rent => id === String(rent.user_id))));
  }

  deleteRent(id: string): Observable<Rent>{
    return this.http.delete<Rent>(this.rentsUrl + id + '/');
  }

  addRent(rent: Rent): Observable<Rent>{
    return this.http.post<Rent>(this.rentsUrl, rent);
  }

  editRent(rentId: string, rent: Rent): Observable<Rent>{
    return this.http.put<Rent>(this.rentsUrl + rentId + '/', rent);
  }
}
