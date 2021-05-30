export class Traductor {

    textoOrigen?: String;
    idiomaOrigen?: String;
    textoDestino?: String;
    idiomaDestino?: String;


    constructor(textoOrigen?: String, idiomaOrigen?: String, textoDestino?: String, idiomaDestino?:string){
        this.textoOrigen = textoOrigen;
        this.idiomaOrigen = idiomaOrigen;
        this.textoDestino = textoDestino;
        this.idiomaDestino= idiomaDestino;
    }
}