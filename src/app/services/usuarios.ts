import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Usuarios {
  protected readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { } //inicializar el servicio http para hacer peticiones

  obtenerDatos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
