import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/layout/home/home.component';
import { NoticiaComponent } from './components/gestionNoticia/noticia/noticia.component';
import { TraductorComponent } from './components/gestionTraductor/traductor/traductor.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoticiaFormComponent } from './components/gestionNoticia/noticia-form/noticia-form.component';
import { PasajeComponent } from './components/gestionPasaje/pasaje/pasaje.component';
import { PasajeFormComponent } from './components/gestionPasaje/pasaje-form/pasaje-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NoticiaComponent,
    TraductorComponent,
    NoticiaFormComponent,
    PasajeComponent,
    PasajeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
