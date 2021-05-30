import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
 
  indice: number = 0;
  noticias: Array<Noticia> = [];
  noti: Noticia = {};

  constructor(private noticiaService: NoticiaService,
    private router: Router) {
    this.iniciarDatos();
    this.cargarNoticias();
  }

  iniciarDatos() {
    this.noticias = new Array<Noticia>();
  }

  cargarNoticias() {
    this.noticiaService.getNoticias().subscribe(
      result => {
        result.forEach((element: any) => {
          let vNoticia = new Noticia();
          Object.assign(vNoticia, element);
          this.noticias.push(vNoticia);
        });
        this.noti = this.noticias[0];
      },
      error => {
        alert("error al cargar");
      }
    )
  }

  siguiente()
  {
    if(this.indice < this.noticias.length-1){
      this.indice = this.indice + 1;
      this.noti = this.noticias[this.indice];
    }
    
  }
  anterior(){
    if(this.indice > 0){
      this.indice = this.indice - 1;
      this.noti = this.noticias[this.indice];
    }
    
  }

  agregarNoticia(){
    this.router.navigate(["noticia-form", 0]);
  }

  modificarNoticia(noticia:Noticia){
    this.router.navigate(["noticia-form/", noticia._id]);
  }

  borrarNoticia(noticia: Noticia){
    this.noticiaService.deleteNoticia(noticia).subscribe(
      (      result: { status: string; }) => {
        if (result.status == "1") {
          alert("El sector se borro correctamente");
        }
        this.iniciarDatos();
        this.cargarNoticias();
      },
      (      error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
 
  }

}
