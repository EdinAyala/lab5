
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pelicula } from "./pelicula.models";

@Injectable({
    providedIn: 'root'
})
export class DataServices {
    constructor(private httpClient: HttpClient) {}

    // Método para guardar el arreglo de películas
    guardar_arreglo(peliculas: Pelicula[]) {
        this.httpClient.put('https://edin-ayala-ing-b7a2a-default-rtdb.firebaseio.com/navidad.json', peliculas).subscribe(
            response => console.log("Se han guardado los cambios en Firebase"),
            error => console.log('Error: ' + error)
        );
    }

    // Método para cargar el arreglo de películas
    cargar_arreglo() {
        return this.httpClient.get('https://edin-ayala-ing-b7a2a-default-rtdb.firebaseio.com/navidad.json');
    }

    // Método para actualizar una película en una posición específica
    actualizar_posicion(indice: number, pelicula: Pelicula) {
        let url = `https://edin-ayala-ing-b7a2a-default-rtdb.firebaseio.com/navidad/${indice}.json`;

        this.httpClient.put(url, pelicula).subscribe(
            response => console.log("Se ha actualizado la película " + response),
            error => console.log("Error: " + error)
        );
    }

    // Método para eliminar una película en una posición específica
    eliminar_posicion(indice: number) {
        let url = `https://edin-ayala-ing-b7a2a-default-rtdb.firebaseio.com/navidad/${indice}.json`;

        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado la película " + response),
            error => console.log("Error: " + error)
        );
    }
}
