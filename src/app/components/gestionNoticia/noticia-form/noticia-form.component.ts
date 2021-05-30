import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticia-form',
  templateUrl: './noticia-form.component.html',
  styleUrls: ['./noticia-form.component.css']
})
export class NoticiaFormComponent implements OnInit {

  noticia: Noticia = {};
  accion: string = "new";

  constructor(private activatedRouted: ActivatedRoute,
              private noticiaService: NoticiaService,
              private router : Router) { }

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(
      params => {
        if (params.id == "0") {
          this.accion = "new";
          this.iniciarNoticia();
        } else {
          this.accion = "update";
          this.iniciarNoticia();
          this.cargarNoticia(params.id);
        }
      }
    );
  }

  iniciarNoticia() {
    this.noticia = new Noticia;
    this.noticia.vigente = false;
  }

  cargarNoticia(id: string) {
    //llamar al service para cargar un sector
    this.noticiaService.getNoticia(id).subscribe(
      result => {
        
        Object.assign(this.noticia, result);
        console.log(this.noticia);
        console.log(result);
      },
      error => {

      }
    )
  }
  agregarNoticia() {

    this.noticiaService.addNoticia(this.noticia).subscribe(
      (      result: { status: string; }) => {
        if (result.status == "1") {
          alert("La noticia se agrego correctamente");
          this.router.navigate(["noticia"]);
        }
        console.log(result);
      },
      (      error: any) => {
        console.log(error);
      }
    )
  }

  modificarNoticia() {
    this.noticiaService.updateNoticia(this.noticia).subscribe(
      (      result: { status: string; }) => {
        if (result.status == "1") {
          alert("El sector se modifico correctamente");
          this.router.navigate(["noticia"]);
        }
        console.log(result);
      },
      (      error: any) => {
        console.log(error);
      }
    )
  }

  limpiarFormulario(noticiaForm :NgForm){
    noticiaForm.reset();
    this.noticia = new Noticia();
  }
  cancelar(){
    this.router.navigate(["noticia"]);
  }

}
