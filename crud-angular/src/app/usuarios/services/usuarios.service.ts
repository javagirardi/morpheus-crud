import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'http://localhost:8080/api/usuarios';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Usuario[]>(this.API)
    .pipe(
      first(),
      //delay(5000)
    );
  }

  loadById(id: String){
    return this.httpClient.get<Usuario>(`${this.API}/${id}`);
  }
  save(record: Partial<Usuario>){
    return this.httpClient.post<Usuario>(this.API, record).pipe(first());
  }

}
