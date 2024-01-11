import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';
import { UsuariosRoutingModule } from './usuarios-routing.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatTableModule,
    SharedModule,
  ]
})
export class UsuariosModule { }
