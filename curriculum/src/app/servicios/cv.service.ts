import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http:HttpClient) { }

  obtenerEducacion():Observable<any>
  {
    console.log('acá funca (cv.service)')
    return this.http.get("./assets/data.json")
  }
}
