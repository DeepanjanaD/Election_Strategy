import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Election } from '../election/election';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  private baseUrl = 'http://localhost:8080/election/all';
  private baseUrl2 = 'http://localhost:8080/election';

  constructor(private httpClient: HttpClient) { }

  // get full list of elections
  getElectionList(): Observable<Election[]>{
    return this.httpClient.get<Election[]>(`${this.baseUrl}`);
  }
  
  // add election
  postElection(election: Election): Observable<Object>{
     return this.httpClient.post(`${this.baseUrl2}`, election);  
  }

  // get election by id
  getElectionById(electionId: string): Observable<Election>{
    return this.httpClient.get<Election>(`${this.baseUrl2}/${electionId}`);
  }

  // update election
  updateElection(electionId: string, election: Election): Observable<Election>{
    return this.httpClient.put<Election>(`${this.baseUrl2}`, election);
  }

  // delete election
  deleteElection(electionId: string, election: Election): Observable<Election>{
    return this.httpClient.request<Election>('delete', this.baseUrl2, { body: election });
  }

}
