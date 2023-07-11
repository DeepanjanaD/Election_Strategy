import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colony } from '../colony/colony';
import { Observable } from 'rxjs';
import { BoothColony } from '../booth/colonyBooth';
import { Booth } from '../booth/booth';
import { Apartment } from '../voter-data/Divisions/apartment';

@Injectable({
  providedIn: 'root'
})
export class ColonyBoothService {

  private baseUrl = 'http://localhost:8080/colonyBooth';
  private baseUrl2 = 'http://localhost:8080/colonyBooth/colony';
  private baseUrl3 = 'http://localhost:8080/colonyBooth/booth';
  private baseUrl4 = 'http://localhost:8080/colonyBooth/colony';
  private baseUrl5 = 'http://localhost:8080/colonyBooth/apartment';


  constructor(private httpClient: HttpClient) { }

  // post colonyBooth
  postColonyBooth(boothId: string, colonyIds: string[]): Observable<Object>{
    return this.httpClient.post<BoothColony[]>(`${this.baseUrl}`, colonyIds, {params: {booth_id: boothId}});  
  }

  //get colony by boothId
  getColonyByBoothId(boothId: string): Observable<Colony[]>{
    return this.httpClient.get<Colony[]>(`${this.baseUrl2}/${boothId}`);
  }

  //delete colonyBooth
  deleteColonyBooth(colonyBoothId: string): Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseUrl}/${colonyBoothId}`);
  }

  //get Booths from ColonyBooth
  getBoothsFromColonyBooth(): Observable<Booth[]>{
    return this.httpClient.get<Booth[]>(`${this.baseUrl3}`);
  }

  getColoniesFromColonyBooth(): Observable<Colony[]>{
    return this.httpClient.get<Colony[]>(`${this.baseUrl4}`);
  }

  getApartmentsFromColonyBooth(): Observable<Apartment[]>{
    return this.httpClient.get<Apartment[]>(`${this.baseUrl5}`);
  }

}
