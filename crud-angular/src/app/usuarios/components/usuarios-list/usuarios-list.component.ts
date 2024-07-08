import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { Usuario } from '../../model/usuario';




@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [MatTableModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './usuarios-list.component.html',
  styleUrl: './usuarios-list.component.scss'
})
export class UsuariosListComponent {

  @Input() usuarios: Usuario[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['name','phone', 'actions'];

  constructor(){}

    onAdd() {
      this.add.emit(true);
    }

    onEdit(usuario: Usuario){
      this.edit.emit(usuario);

    }
}
