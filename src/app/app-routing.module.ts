import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TrabajoComponent } from './pages/trabajo/trabajo.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'trabajo', component: TrabajoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'contactanos', component: ContactanosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
