import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './conteiners/usuarios/usuarios.component';
import { UsuarioFormComponent } from './conteiners/usuario-form/usuario-form.component';
import { UsuarioResolver } from './guards/usuario.resolver';

const routes: Routes = [
{ path: '', component: UsuariosComponent},
{ path: 'new', component: UsuarioFormComponent, resolve: { usuario: UsuarioResolver}},
{ path: 'edit/:id', component: UsuarioFormComponent, resolve: { usuario: UsuarioResolver}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
