import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caste } from '../voter-data/Divisions/caste';

@Injectable({
  providedIn: 'root'
})
export class CasteService {

  private baseUrl = 'http://localhost:8080/caste/all';

  constructor(private httpClient: HttpClient) { }

  getCaste(): Observable<Caste[]>{
    return this.httpClient.get<Caste[]>(`${this.baseUrl}`);
  }

}
