import { Component } from '@angular/core';
import { InicioUsuariosService } from '../inicio-usuarios.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  constructor (private InicioUsuariosService: InicioUsuariosService){
  }

  ngOnInit(){
    this.InicioUsuariosService.comprobarUsuarioLogueado();
  }

}
