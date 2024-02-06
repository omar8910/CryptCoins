import { Component, Input } from '@angular/core';
import { ConfiguracionPeticionApiService } from '../configuracion-peticion-api.service';

@Component({
  selector: 'app-estructura-moneda',
  templateUrl: './estructura-moneda.component.html',
  styleUrl: './estructura-moneda.component.css'
})
export class EstructuraMonedaComponent {
  @Input() moneda: any;
  monedaDetallada: any;

  constructor(private configuracionPeticionApiService: ConfiguracionPeticionApiService) { 

  }

  ngOnInit(){
    // this.obtenerDetallesEspecificos();

  }

  obtenerDetallesEspecificos(){
    this.configuracionPeticionApiService.obtenerDetallesMoneda(this.moneda.id).then((datos:any) => { 
    // El .then, es porque nos devuelve una promesa, y se esperará a que se resuelva, 
    // lo que significa que se ejecutará el código que hay dentro de la función cuando tenga los datos de la API.
      this.monedaDetallada = datos;
    });

    console.log(this.monedaDetallada);
  }


}
