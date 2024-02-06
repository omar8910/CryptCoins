import { Component } from '@angular/core';
import { ConfiguracionPeticionApiService } from '../configuracion-peticion-api.service';

@Component({
  selector: 'app-cabecera-portfolio',
  templateUrl: './cabecera-portfolio.component.html',
  styleUrl: './cabecera-portfolio.component.css'
})
export class CabeceraPortfolioComponent {
  pagina = 1;
  tamanioPagina = 10;
  listaMonedas = new Array<any>();
  totalPaginas=0;
  detallesMoneda: any;

  constructor(public configuracionPeticionApiService: ConfiguracionPeticionApiService) { }

  aniadirMonedaAFavoritos(idMoneda: string){
    this.configuracionPeticionApiService.guardarMonedaSeleccionada(idMoneda);
  }

  ngOnInit(){
    
    this.configuracionPeticionApiService.obtenerMonedas();
    this.totalPaginas = Math.ceil(this.configuracionPeticionApiService.arrayMonedas.length / this.tamanioPagina);
  }

  


}
