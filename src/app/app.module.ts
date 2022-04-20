import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//componentes
import { HeaderComponent } from './components/header/header.component';

//paginas
import { AppComponent } from './app.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TrabajoComponent } from './pages/trabajo/trabajo.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    CursosComponent,
    ContactanosComponent,
    HeaderComponent,
    InicioComponent,
    TrabajoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
