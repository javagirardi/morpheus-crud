import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { SharedModule } from '../../../shared/shared.module';
import { UsuariosListComponent } from '../../components/usuarios-list/usuarios-list.component';
import { Usuario } from '../../model/usuario';
import { UsuariosService } from '../../services/usuarios.service';



@Component({
    selector: 'app-usuarios',
    standalone: true,
    templateUrl: './usuarios.component.html',
    styleUrl: './usuarios.component.scss',
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
        MatFormFieldModule,
        UsuariosListComponent
    ]
})
export class UsuariosComponent {

usuarios$: Observable<Usuario[]>;

// onClick: any;

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
  this.router.navigate(['new'], {relativeTo:this.route});
}

onEdit(usuario: Usuario){
  this.router.navigate(['edit', usuario._id], {relativeTo:this.route});
}

}
