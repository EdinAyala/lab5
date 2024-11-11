

export class Pelicula {
    titulo: string = "";
    director: string = "";
    anio: number = 0;
    genero: string = "";
    duracion: number = 0;
    sinopsis: string = "";

    constructor(
        titulo: string,
        director: string,
        ano: number,
        genero: string,
        duracion: number,
        sinopsis: string
    ) {
        this.titulo = titulo;
        this.director = director;
        this.anio = ano;
        this.genero = genero;
        this.duracion = duracion;
        this.sinopsis = sinopsis;
    }
}
