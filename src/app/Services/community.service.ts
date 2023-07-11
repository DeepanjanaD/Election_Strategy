import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Community } from '../voter-data/Divisions/community';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private baseUrl = 'http://localhost:8080/community/all';

  constructor(private httpClient: HttpClient) { }

  // get Communities
  getCommunities(): Observable<Community[]>{
    return this.httpClient.get<Community[]>(`${this.baseUrl}`);
  }

}
