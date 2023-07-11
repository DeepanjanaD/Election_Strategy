import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../voter-data/Divisions/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  private baseUrl = 'http://localhost:8080/apartment';

  constructor(private httpClient: HttpClient) { }

  getApartmentsOfColony(colonyId: string): Observable<Apartment[]>{
    return this.httpClient.get<Apartment[]>(`${this.baseUrl}/${colonyId}`);
  }
}
