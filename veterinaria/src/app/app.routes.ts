import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { IniciarSesionComponent } from './components/contactenos/iniciar-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { DatosAnimalComponent } from './components/datos-animal/datos-animal.component';


// Exportar el arreglo de rutas
export const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: 'mi-cuenta', component: MiCuentaComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contactenos', component: IniciarSesionComponent },
  { path: 'mi-cuenta/registro', component: RegistroComponent },
  { path: 'crear-cita', component: CrearCitaComponent },
  { path: 'datos-animal', component: DatosAnimalComponent },
];
