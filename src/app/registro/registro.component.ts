import { Component } from '@angular/core';
import { InicioUsuariosService } from '../inicio-usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  valorEmail:string = '';
  valorPassword:string = '';

  constructor (public InicioUsuariosService: InicioUsuariosService){}

  registroEmailPassword(){
    this.InicioUsuariosService.registroEmailPassword(this.valorEmail, this.valorPassword);
  }

  registroGoogle(){
    this.InicioUsuariosService.registroGoogle();
  }

  registroGithub(){
    this.InicioUsuariosService.registroGithub();
  }
}
