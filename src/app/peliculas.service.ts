

import { Injectable } from "@angular/core";
import { Pelicula } from "./pelicula.models"; // Asegúrate de tener el modelo de película
import { ServicioPeliculaService } from "../app/servicio-pelicula.service"; // Este servicio puede mantenerse si necesitas mostrar mensajes
import { DataServices } from "./data.service"; // Este servicio también se puede mantener si estás usando Firebase

@Injectable({
    providedIn: 'root'
})
export class PeliculasService {

    peliculas: Pelicula[] = []; // Usamos un arreglo para almacenar las películas

    constructor(private servicioMensaje: ServicioPeliculaService, private dataService: DataServices) {}

    agregar_pelicula_servicio(pelicula: Pelicula) {
        this.servicioMensaje.muestra_mensaje("Título ingresado: " + pelicula.titulo); // Cambiar "nombre" por "titulo"
        this.peliculas.push(pelicula);
        this.dataService.guardar_arreglo(this.peliculas); // Guardamos las películas en Firebase o la base de datos
    }

    encontrar_pelicula(indice: number) {
        let pelicula: Pelicula = this.peliculas[indice]; // Obtenemos la película en base al índice
        return pelicula;
    }

    actualizar_pelicula(indice: number, pelicula: Pelicula) {
        let peliculaModificada = this.peliculas[indice];
        peliculaModificada.titulo = pelicula.titulo;
        peliculaModificada.director = pelicula.director;
        peliculaModificada.anio = pelicula.anio;
        peliculaModificada.genero = pelicula.genero;
        peliculaModificada.duracion = pelicula.duracion;
        peliculaModificada.sinopsis = pelicula.sinopsis;
        
        this.dataService.actualizar_posicion(indice, pelicula); // Actualizamos en Firebase o la base de datos
    }

    eliminar_pelicula(indice: number) {
        this.peliculas.splice(indice, 1); // Eliminamos la película del arreglo
        this.dataService.eliminar_posicion(indice); // Eliminamos de la base de datos
        this.dataService.guardar_arreglo(this.peliculas); // Guardamos el nuevo arreglo actualizado
    }

    obtener_peliculas() {
        return this.dataService.cargar_arreglo(); // Cargamos las películas de Firebase o la base de datos
    }

    set_peliculas(misPeliculas: Pelicula[]) {
        this.peliculas = misPeliculas; // Establecemos las películas del arreglo
    }
}
