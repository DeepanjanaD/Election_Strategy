import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booth } from '../booth/booth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoothService {

  private baseUrl = 'http://localhost:8080/booth/all';
  private baseUrl2 = 'http://localhost:8080/booth';

  constructor(private httpClient: HttpClient) { }

  // get full list of booths
  getBoothList(): Observable<Booth[]>{
    return this.httpClient.get<Booth[]>(`${this.baseUrl}`);
  }

  // add booth
  postBooth(booth: Booth): Observable<Booth>{
      return this.httpClient.post<Booth>(`${this.baseUrl2}`, booth);  
  }

  // get booth by id
  getBoothById(boothId: string): Observable<Booth>{
    return this.httpClient.get<Booth>(`${this.baseUrl2}/${boothId}`);
  }

  // update booth
  updateBooth(boothId: string, booth: Booth): Observable<Booth>{
    return this.httpClient.put<Booth>(`${this.baseUrl2}`, booth);
  }

  // delete booth
  deleteBooth(boothId: string, booth: Booth): Observable<Booth>{
    return this.httpClient.request<Booth>('delete', this.baseUrl2, { body: booth });
  }
}
