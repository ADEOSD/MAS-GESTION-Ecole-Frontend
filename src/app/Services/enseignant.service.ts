import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private apiUrl = 'http://localhost:8086/api/enseignants/';

  constructor( private http:HttpClient) { }
 
  getAllEnseignants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching classes:', error);
          return [];
        })
      );
  }
}
