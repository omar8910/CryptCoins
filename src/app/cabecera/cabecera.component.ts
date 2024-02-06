import { Component } from '@angular/core';
import { InicioUsuariosService } from '../inicio-usuarios.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  constructor (public inicioUsuariosService: InicioUsuariosService) { }

  ngOnInit(){
    this.inicioUsuariosService.comprobarUsuarioLogueado();
  }

  mostrarMenu(){ // Se mostrará el menú si el usuario está identificado
    if(this.inicioUsuariosService.usuarioIdentificado){
      return true;
    } else {
      return false;
    }
  }

  cerrarSesion(){
    this.inicioUsuariosService.cerrarSesion();
  }

}
