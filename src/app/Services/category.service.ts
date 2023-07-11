import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../voter-data/Divisions/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {}

  private baseUrl = 'http://localhost:8080/category/all';

  getCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseUrl}`);
  }
}
