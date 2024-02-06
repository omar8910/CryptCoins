import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DetallesMonedaComponent } from './detalles-moneda/detalles-moneda.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'detalles-moneda/:id', component: DetallesMonedaComponent },
  { path: '**', component: LandingPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class EnrutadoAppModule { }
