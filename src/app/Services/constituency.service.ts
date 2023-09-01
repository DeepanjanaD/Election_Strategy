import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constituency } from '../voter-data/Divisions/constituency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConstituencyService {

  constructor(private httpClient: HttpClient) {}
  
  private baseUrl = "http://localhost:8080/constituency";

  // get full list of elections
  getConstituencyList(): Observable<Constituency[]>{
    return this.httpClient.get<Constituency[]>(`${this.baseUrl}`);
  }
  

}
