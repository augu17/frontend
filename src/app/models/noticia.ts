export class Noticia {
    _id?: String;
    titulo?: String;
    noticia?: String;
    img?: String;
    vigente?: Boolean;


    constructor(_id?:String, titulo?:string, noticia?:string, img?:string,vigente?: Boolean){
        this._id = _id;
        this.titulo = titulo;
        this.noticia = noticia;
        this.img= img;
        this.vigente = vigente;
    }
}