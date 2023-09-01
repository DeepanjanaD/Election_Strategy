import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ward } from '../voter-data/Divisions/ward';

@Injectable({
  providedIn: 'root'
})
export class WardServiceService {

  private baseUrl = 'http://localhost:8080/ward';

  constructor(private httpClient: HttpClient) { }

  getWardList(): Observable<Ward[]>{
    return this.httpClient.get<Ward[]>(`${this.baseUrl}`);
  }
}
