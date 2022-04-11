import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { AppComponent } from './app.component';
import { ConsultorioComponent } from './pages/consultorio/consultorio.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { TrabajoInstitucionalComponent } from './pages/trabajo-institucional/trabajo-institucional.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'consultorio', component: ConsultorioComponent },
  { path: 'trabajo-institucional', component: TrabajoInstitucionalComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'contactanos', component: ContactanosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
