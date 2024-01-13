import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsuariosService } from '../services/usuarios.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


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
export class UsuarioFormComponent {

form: FormGroup;

constructor(private formBuilder: FormBuilder,
  private service: UsuariosService,
  private snackBar: MatSnackBar) {

  this.form = this.formBuilder.group({
  name: [null],
  phone: [null]
});
  }
  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => console.log(result), error => this.onError());
  }

  onCancel(){}

  private onError(){
    this.snackBar.open('Erro ao salvar usuário', '', {duration: 5000});
  }

}
