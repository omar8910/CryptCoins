import { Component } from '@angular/core';
import { ConfiguracionPeticionApiService } from '../configuracion-peticion-api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-portfolio',
  templateUrl: './cuerpo-portfolio.component.html',
  styleUrl: './cuerpo-portfolio.component.css'
})
export class CuerpoPortfolioComponent implements OnInit{
  public monedaSeleccionada = new Array();

  constructor(public ConfiguracionPeticionApiService: ConfiguracionPeticionApiService) { }

  ngOnInit(){
    this.ConfiguracionPeticionApiService.setArrayMonedasFavoritas();
  }

  eliminarMonedaFavorita(datoEvent:any){
    console.log("Has clicado en eliminar moneda favorita")
    console.log(datoEvent)
    this.ConfiguracionPeticionApiService.eliminarMonedaFavorita(datoEvent.idMoneda);
  }
}
