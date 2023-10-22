import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
 apiUrl ='http://localhost:8086/api/etudiants';

  constructor(private http:HttpClient) { }

  getAllEtudiants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching students:', error);
          return [];
        })
      );
  }
}
