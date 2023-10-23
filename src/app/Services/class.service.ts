import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs'
import { Class } from 'src/app/models/Classes';
@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiUrl = 'http://localhost:8084/api/cours/getall';
  constructor(private http: HttpClient) {

   }
   getAllClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching classes:', error);
          return [];
        })
      );
  }
  
  

}
