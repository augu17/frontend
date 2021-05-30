import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraductorComponent } from './components/gestionTraductor/traductor/traductor.component';
import { NoticiaComponent } from './components/gestionNoticia/noticia/noticia.component';
import { HomeComponent } from './components/layout/home/home.component';
import { NoticiaFormComponent } from './components/gestionNoticia/noticia-form/noticia-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'noticia', component: NoticiaComponent},
  { path: 'noticia-form/:id', component: NoticiaFormComponent},
  { path: 'traductor', component: TraductorComponent },
  { path: '**', pathMatch:'full',redirectTo:'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
