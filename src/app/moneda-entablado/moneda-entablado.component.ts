import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-moneda-entablado',
  templateUrl: './moneda-entablado.component.html',
  styleUrl: './moneda-entablado.component.css'
})
export class MonedaEntabladoComponent {
  @Input() moneda: any;
  public informacionMoneda: any;

  @Output() eventoEliminarMonedaFavorita = new EventEmitter<string>();

  constructor() { }

  eventoEliminarMoneda(){
    this.eventoEliminarMonedaFavorita.emit(this.moneda.idMoneda);
  }



}
