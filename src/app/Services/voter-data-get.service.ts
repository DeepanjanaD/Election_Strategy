import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VoterDataGet } from '../voter-data/voterDataGet';

@Injectable({
  providedIn: 'root'
})
export class VoterDataGetService {

  constructor(private httpClient: HttpClient) { }

  getVoterData():   Observable<VoterDataGet[]>{
    return this.httpClient.get<VoterDataGet[]>("http://localhost:8080/voterData");
  }
}
