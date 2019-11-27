import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AdminLayoutService {
  url:string;
  constructor(private _http:HttpClient) {
    this.url="http://127.0.0.1:8000/";
  }
  public get(){
    return this._http.get(this.url+"api/usuario/obtener");
  }
  public guardar(objeto: any ): Observable<any> {
    return this._http.post<any>(this.url+"api/vehiculo/guardar", objeto, httpOptions)
    .pipe(
      catchError(err => {
            console.log('error', err);
            return throwError(err);
        })
    );
  }

}
