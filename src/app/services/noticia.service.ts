import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia'

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  urlBase: string = "http://localhost:3000/api/"

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any> {
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }

    return this.http.get(this.urlBase + "noticia", option);
  }

  getNoticia(id: String): Observable<any> {
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this.http.get(this.urlBase + "noticia/" + id, option);
  }

  addNoticia(noticia : Noticia): Observable<any> {
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }

    let body = JSON.stringify(noticia);
    console.log(body);
    return this.http.post(this.urlBase + "noticia", body, option);
  }

  updateNoticia(noticia: Noticia): Observable<any> {
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }

    let body = JSON.stringify(noticia);
    console.log(body);
    return this.http.put(this.urlBase + "noticia/" + noticia._id, body, option);
  }
  
  deleteNoticia(noticia: Noticia): Observable<any> {
    return this.http.delete(this.urlBase + "noticia/"+noticia._id);
  }
}
