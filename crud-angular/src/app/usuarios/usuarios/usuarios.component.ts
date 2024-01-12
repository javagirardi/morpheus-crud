import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../services/usuarios.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';





@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatDialogModule,
    SharedModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {

usuarios$: Observable<Usuario[]>;
displayedColumns = ['name','phone', 'actions'];
onClick: any;

constructor(private usuariosService: UsuariosService,
            public dialog: MatDialog,
            private router: Router,
            private route: ActivatedRoute,
            ) {

this.usuarios$ = this.usuariosService.list()
.pipe(
  catchError(error => {
    this.onError('Erro ao carregar usuários.');
    return of([])
  })
);

}
onError(errorMsg: string) {
  this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
  });
}

onAdd() {
  console.log("ok")
  this.router.navigate(['new'], {relativeTo:this.route});
}

}
