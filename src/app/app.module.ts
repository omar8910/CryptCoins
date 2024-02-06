/* Los módulos son clases con la anotación @NgModule que se utilizan para agrupar componentes, directivas y pipes.
Esto permite una mejor organización del código*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CabeceraPortfolioComponent } from './cabecera-portfolio/cabecera-portfolio.component';
import { CuerpoPortfolioComponent } from './cuerpo-portfolio/cuerpo-portfolio.component';
import { DetallesMonedaComponent } from './detalles-moneda/detalles-moneda.component';
import { EstructuraMonedaComponent } from './estructura-moneda/estructura-moneda.component';
import { FooterComponent } from './footer/footer.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MonedaEntabladoComponent } from './moneda-entablado/moneda-entablado.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegistroComponent } from './registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { EnrutadoAppModule } from './enrutado-app.module';

import * as CanvasJSAngularChart from "../assets/canvasjs.angular.component";
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


@NgModule({
  declarations: [
    // Aquí se declaran los componentes, directivas y pipes que pertenecen al módulo.
    // Para que un componente, directiva o pipe pueda ser utilizado en el módulo, debe ser declarado en este, por lo tanto en el componente hay que quitar la propiedad "standalone=true";
    AppComponent,
    CabeceraComponent, 
    CabeceraPortfolioComponent,
    CuerpoPortfolioComponent,
    DetallesMonedaComponent,
    EstructuraMonedaComponent,
    FooterComponent,
    InicioSesionComponent,
    LandingPageComponent,
    MonedaEntabladoComponent,
    PortfolioComponent,
    RegistroComponent,
    CanvasJSChart
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    EnrutadoAppModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
