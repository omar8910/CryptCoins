import { Component } from '@angular/core';
import { InicioUsuariosService } from '../inicio-usuarios.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css'
})
export class InicioSesionComponent {
  valorEmail:string = '';
  valorPassword:string = '';

  constructor (public InicioUsuariosService: InicioUsuariosService){}

  inicioSesionEmailPassword(){
    this.InicioUsuariosService.inicioSesionEmailPassword(this.valorEmail, this.valorPassword);
  }

  inicioSesionGoogle(){
    this.InicioUsuariosService.inicioSesionGoogle();
  }

  inicioSesionGithub(){
    this.InicioUsuariosService.inicioSesionGithub();
  }
}
