import { Injectable } from '@angular/core'; // Esto nos permite inyectar el servicio en el constructor de la clase.
import { InicioUsuariosService } from './inicio-usuarios.service'; // Importamos el servicio InicioUsuariosService.
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'; // Importamos las clases ActivatedRouteSnapshot, CanActivate, Router y RouterStateSnapshot del paquete @angular/router.

@Injectable({
  providedIn: 'root'
})
export class RutasProtegidasGuard implements CanActivate {
  constructor(private inicioUsuariosService: InicioUsuariosService, private router: Router) {};

  canActivate(
    route: ActivatedRouteSnapshot, // Contiene la información sobre una ruta asociada a un componente cargado, es decir, la ruta que se está activando actualmente.
    state: RouterStateSnapshot):any{ // Contiene el estado de la ruta, es decir, la URL y si la ruta está activa o no.
    if(this.inicioUsuariosService.usuarioIdentificado){
      return true;
    }else{
      this.router.navigate(['/inicio-sesion']);
      return false;
    }
  }
}