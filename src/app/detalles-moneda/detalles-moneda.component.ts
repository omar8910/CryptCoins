import { Component,Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ConfiguracionPeticionApiService } from '../configuracion-peticion-api.service';

@Component({
  selector: 'app-detalles-moneda',
  templateUrl: './detalles-moneda.component.html',
  styleUrl: './detalles-moneda.component.css'
})
export class DetallesMonedaComponent {
  public idMoneda:any;
  public monedaSeleccionada:any;
  public monedaDetallada:any;

  // Gráfico de CanvasJS Angular.
  dataPoints: any = [];
  chartOptions: any;
  chart: any;
  dataForPoints: any = [];

  @Input() detallesMoneda= "";

  // Creamos el constructor vacío con los módulos ActivatedRoute y ConfiguracionPeticionApiService.
  constructor(private route: ActivatedRoute, public configuracionPeticionApiService: ConfiguracionPeticionApiService){

  }

  // Creamos el método ngOnInit().
  ngOnInit(){
    this.idMoneda = this.route.snapshot.paramMap.get('id');
    this.monedaSeleccionada = this.configuracionPeticionApiService.arrayMonedas.find((moneda: any) => moneda.id === this.idMoneda);
    this.obtenerDetallesEspecificos();
    console.log(this.monedaSeleccionada);


    
        // Configuracion del grafico
        this.chartOptions = {
          theme: "dark2",
          zoomEnabled: true,
          backgroundColor: "#0C0E12",
          title: {
            text:"Historical Price",
            fontColor: "#F2BC07",
            margin: 40,
          },
          subtitles: [{
            text: "Loading Data...",
            fontColor: "#F2BC07",
            fontSize: 24,
            horizontalAlign: "center",
            verticalAlign: "center",
            dockInsidePlotArea: true
          }],
          axisY: {
            title: "Historical price (in EUR)",
            titleFontColor: "#F2BC07",
            titleFOntSize: 24,
            suffix: "€"
          },
          data: [{
            lineColor: "#F2BC07",
            markerColor: "#F2BC07",
            markerSize: 2,
            type: "line",
            name: "Closing Price",
            yValueFormatString: "€#,###.00",
            dataPoints: this.dataPoints
          }]
        }
    }

    obtenerDetallesEspecificos(){
      this.configuracionPeticionApiService.obtenerDetallesMoneda(this.monedaSeleccionada.id).then((datos:any) => { 
      // El .then, es porque nos devuelve una promesa, y se esperará a que se resuelva, 
      // lo que significa que se ejecutará el código que hay dentro de la función cuando tenga los datos de la API.
        this.monedaDetallada = datos;
        console.log(this.monedaDetallada);
      });
    }

    getChartInstance(chart: object) {
      this.chart = chart;
    }

    ngAfterViewInit() {
      this.chartOptions.subtitles[0].text = "";
      this.chartOptions.title.text = this.monedaDetallada.name + " Historical Price";
      this.chartOptions.data.name = this.monedaDetallada.name + " Historical Price";
      this.configuracionPeticionApiService.obtenerFechaHistoricaMoneda(this.monedaDetallada.id).subscribe((data: {}) => {
        this.dataForPoints = data;
        for (let i = 0; i < this.dataForPoints.prices.length; i++) {
          this.dataPoints.push({
            x: new Date(this.dataForPoints.prices[i][0]),
            y: this.dataForPoints.prices[i][1]
          });
        }
      this.chart.render();
      });
    }
    volverAtras() {
      window.history.back();
    }
    
  }



