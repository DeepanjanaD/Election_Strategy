import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colony } from '../colony/colony';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColonyService {

  private baseUrl = 'http://localhost:8080/colony/all';
  private baseUrl2 = 'http://localhost:8080/colony';

  constructor(private httpClient: HttpClient) { }

  // get full list of colonies
  getColonyList(): Observable<Colony[]>{
    return this.httpClient.get<Colony[]>(`${this.baseUrl}`);
  }

  // add colony
  postColony(colony: Colony): Observable<Colony>{
      return this.httpClient.post<Colony>(`${this.baseUrl2}`, colony);  
    }

  // get colony by id
  getColonyById(colonyId: string): Observable<Colony>{
    return this.httpClient.get<Colony>(`${this.baseUrl2}/${colonyId}`);
  }

  // update colony
  updateColony(colonyId: string, colony: Colony): Observable<Colony>{
    return this.httpClient.put<Colony>(`${this.baseUrl2}`, colony);
  }

  // delete colony
  deleteColony(colonyId: string, colony: Colony): Observable<Colony>{
    return this.httpClient.request<Colony>('delete', this.baseUrl2, { body: colony });
  }
}
