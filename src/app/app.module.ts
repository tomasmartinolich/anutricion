import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//componentes
import { HeaderComponent } from './components/header/header.component';

//paginas
import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ConsultorioComponent } from './pages/consultorio/consultorio.component';
import { TrabajoInstitucionalComponent } from './pages/trabajo-institucional/trabajo-institucional.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    ConsultorioComponent,
    TrabajoInstitucionalComponent,
    CursosComponent,
    ContactanosComponent,
    HeaderComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
