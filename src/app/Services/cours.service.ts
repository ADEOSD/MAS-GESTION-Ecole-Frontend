import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Class } from '../models/Classes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = 'http://localhost:8084/api/cours/getall';
  constructor(private http: HttpClient) {

   }
   getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching classes:', error);
          return [];
        })
      );
  }

}