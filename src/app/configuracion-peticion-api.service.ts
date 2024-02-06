import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importamos el módulo HttpClient para poder realizar peticiones AJAX.
import { Firestore, collectionData, collection, query, where, setDoc, deleteDoc, doc } from '@angular/fire/firestore'; // Importamos las clases Firestore, collectionData y collection del paquete @angular/fire/firestore.
import { InicioUsuariosService } from './inicio-usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class ConfiguracionPeticionApiService {
  // Creamos un array de donde guardaremos las monedas.
  public arrayMonedas = new Array();

  // Creamos dos arrays de monedas favoritas. Una para guardar 
  public arrayMonedasFavoritas = new Array<any>();
  // public listaFavoritas: new Array<any>();

  // Almacenamos la moneda que se ha seleccionado en firestore.
  public monedaSeleccionada: any;

  // Detalles de la moneda seleccionada.
  public detallesMoneda: any;

  // Utilizamos la colección de firestore para guardar las monedas favoritas.

  private colection = collection(this.firestore, 'cryptcoinsFavoritas');

  constructor(private PeticionAJAXhttp: HttpClient, private firestore: Firestore, private inicioUsuariosService: InicioUsuariosService) { }
  /* El constructor está vacío, pero nos permite inyectar el módulo HttpClient para poder realizar peticiones AJAX,
   el módulo Firestore para poder realizar peticiones a la base de datos de Firebase 
   y el servicio InicioUsuariosService para poder utilizar sus métodos y propiedades.
  */

  // Método para obtener las monedas.
  obtenerMonedas() {
    // Realizamos la petición AJAX con el método get del módulo HttpClient.
    this.PeticionAJAXhttp.get('https://api.coingecko.com/api/v3/coins/list').subscribe((datos: any) => {
      // Guardamos la respuesta en el array de monedas.

      this.arrayMonedas = datos;
    });
  }

  // Método para setear las monedas favoritas en firestore.
  setArrayMonedasFavoritas(){
    collectionData(query(this.colection, where('idUsuario', '==', this.inicioUsuariosService.idUsuario)))
    .subscribe((datos: any) => { this.arrayMonedasFavoritas = datos; console.log(this.inicioUsuariosService.idUsuario) });
       /* Lo que hacemos es una consulta a la colección de firestore para obtener 
    las monedas favoritas del usuario que está logueado dependiendo de su idUsuario*/
  }

  // Método para guardar las monedas favoritas en firestore.
  guardarMonedaFavorita(idMoneda:string){
    setDoc(doc(this.firestore, 'cryptcoinsFavoritas', idMoneda), {
      idMoneda: idMoneda,
      idUsuario: this.inicioUsuariosService.idUsuario,
      nombreMoneda: this.monedaSeleccionada.name,
      simboloMoneda: this.monedaSeleccionada.symbol || "No disponible",
      imagenMoneda: this.monedaSeleccionada.image.small || "No disponible",
      imagenMonedaGrande: this.monedaSeleccionada.image.large || "No disponible",
      precioMoneda: this.monedaSeleccionada.market_data.current_price.eur || "No disponible",
      capitalizaciondeMercadoMoneda: this.monedaSeleccionada.market_data.market_cap.eur || "No disponible",
      volumenMoneda: this.monedaSeleccionada.market_data.total_volume.eur || "No disponible",
      precioMaximoMoneda: this.monedaSeleccionada.market_data.high_24h.eur || "No disponible",
      precioMinimoMoneda: this.monedaSeleccionada.market_data.low_24h.eur || "No disponible",
      circulacionMoneda: this.monedaSeleccionada.market_data.circulating_supply || "No disponible",
    })
  }

  // Método para eliminar las monedas favoritas de firestore.
  eliminarMonedaFavorita(idMoneda:string){
    deleteDoc(doc(this.firestore, 'cryptcoinsFavoritas', idMoneda));
  }

  // Método para guardar la moneda seleccionada.
  guardarMonedaSeleccionada(idMoneda: string) {
    this.PeticionAJAXhttp.get(`https://api.coingecko.com/api/v3/coins/${idMoneda}`).subscribe((datos: any) => {
      this.monedaSeleccionada = datos;
      this.guardarMonedaFavorita(idMoneda);
    });
    
  }

  // Método para obtener los detalles de la moneda seleccionada.
  async obtenerDetallesMoneda(idMoneda: string) { // Utilizamos async para que sea una funcion asincrona y eso conlleva a que espere los datos de la API ya que no son instantaneos.
    console.log("Estoy haciendo una peticion a la API");
    return new Promise((resolve, reject) => { // Esto nos devolverá una nueva promesa.
      this.PeticionAJAXhttp.get(`https://api.coingecko.com/api/v3/coins/${idMoneda}`).subscribe((datos: any) => {
        this.detallesMoneda = datos;
        // console.log(datos);
        resolve(datos); // Una vez resuelta la respuesta, guardará los datos de la api en la variable detallesMoneda.
      });
    })

  }

  // Obtener la fecha histórica de la moneda seleccionada.
  obtenerFechaHistoricaMoneda(idMoneda: string) {
    return this.PeticionAJAXhttp.get(`https://api.coingecko.com/api/v3/coins/${idMoneda}/market_chart?vs_currency=eur&days=max`);
  }

  getArrayMonedas(){
    return this.arrayMonedas;
  }
  
}

