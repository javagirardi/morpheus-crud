import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UsuariosService } from '../../services/usuarios.service';



@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,

  ],

  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.scss'
})
export class UsuarioFormComponent implements OnInit{

form = this.formBuilder.group({
  name: [''],
  phone: ['']
});

constructor(private formBuilder: NonNullableFormBuilder,
  private service: UsuariosService,
  private snackBar: MatSnackBar,
  private location: Location){
  //this.form
  }

  ngOnInit(): void{
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result =>this.onSuccess(), error => this.onError());
      }


  onCancel(){
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Usuário salvo com sucesso!', '', { duration: 3000 });
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar usuário', '', {duration: 3000});
  }

}
