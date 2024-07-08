import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioResolver {
  constructor(private service: UsuariosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuario> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }

    return of({ _id: '', name: '', phone: ''});
  }
}
