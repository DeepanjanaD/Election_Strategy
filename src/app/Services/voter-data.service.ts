import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VoterData } from '../voter-data/voterData';
import { forkJoin, Observable } from 'rxjs';

import { Community } from '../voter-data/Divisions/community';
import { Category } from '../voter-data/Divisions/category';
import { Caste } from '../voter-data/Divisions/caste';
import { AgeGroup } from '../voter-data/Divisions/ageGroup';
import { Booth } from '../booth/booth';
import { Colony } from '../colony/colony';
import { Apartment } from '../voter-data/Divisions/apartment';

@Injectable({
  providedIn: 'root'
})
export class VoterDataService {

  private baseUrl = 'http://localhost:8080/voterData';

  constructor(private httpClient: HttpClient) { }

  postVoterData(voterData: VoterData): Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseUrl}`, voterData);
  }

  getVoterData(): Observable<VoterData[]>{
    return this.httpClient.get<VoterData[]>(`${this.baseUrl}`);
  }

  updateVoterData(voterData: VoterData): Observable<VoterData>{
    return this.httpClient.put<VoterData>(`${this.baseUrl}`, voterData);
  }

  getVoterDataById(voterDataId: string): Observable<VoterData>{
    return this.httpClient.get<VoterData>(`${this.baseUrl}/${voterDataId}`);
  }

  getCommunityOfVoterData(voterDataId: string): Observable<Community>{
    return this.httpClient.get<Community>(`${this.baseUrl}/community/${voterDataId}`);
  }

  getCategoryOfVoterData(voterDataId: string): Observable<Category>{
    return this.httpClient.get<Category>(`${this.baseUrl}/category/${voterDataId}`);
  }

  getCasteOfVoterData(voterDataId: string): Observable<Caste>{
    return this.httpClient.get<Caste>(`${this.baseUrl}/caste/${voterDataId}`);
  }

  getAgeGroupOfVoterData(voterDataId: string): Observable<AgeGroup>{
    return this.httpClient.get<AgeGroup>(`${this.baseUrl}/ageGroup/${voterDataId}`);
  }

  getBoothOfVoterData(voterDataId: string): Observable<Booth>{
    return this.httpClient.get<Booth>(`${this.baseUrl}/booth/${voterDataId}`);
  }

  getColonyOfVoterData(voterDataId: string): Observable<Colony>{
    return this.httpClient.get<Colony>(`${this.baseUrl}/colony/${voterDataId}`);
  }

  getApartmentOfVoterData(voterDataId: string): Observable<Apartment>{
    return this.httpClient.get<Apartment>(`${this.baseUrl}/apartment/${voterDataId}`);
  }

  deleteVoterData(voterDataId: string): Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseUrl}/${voterDataId}`);
  }
    
}
