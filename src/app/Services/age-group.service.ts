import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AgeGroup } from '../voter-data/Divisions/ageGroup';

@Injectable({
  providedIn: 'root'
})
export class AgeGroupService {

  private baseUrl = 'http://localhost:8080/ageGroup/all';

  constructor(private httpClient: HttpClient) { }

  //get all age groups
  getAgeGroups(): Observable<AgeGroup[]>{
    return this.httpClient.get<AgeGroup[]>(`${this.baseUrl}`);
  }
}
