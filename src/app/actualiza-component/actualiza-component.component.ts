

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from '../pelicula.models'; // Asegúrate de tener el modelo de película
import { FormsModule } from '@angular/forms';
import { PeliculasService } from'../peliculas.service'; // Asegúrate de tener un servicio de películas

@Component({
  selector: 'app-actualiza-component',
  standalone: true,
  imports: [FormsModule],
  providers: [],
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent implements OnInit {
  volverHome() {
    this.router.navigate(['']);
  }

  titulo = 'Listado de Películas';
  
  peliculas: Pelicula[];

  cuadroTitulo: string = "";
  cuadroDirector: string = "";
  cuadroAnio: number = 0;
  cuadroGenero: string = "";
  cuadroDuracion: number = 0;
  cuadroSinopsis: string = "";
  indice: number;
  accion: number;

  constructor(private router: Router, private peliculasService: PeliculasService, private route: ActivatedRoute) {
    // this.peliculas = this.peliculasService.peliculas;
  }

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.indice = this.route.snapshot.params['id'];
    let pelicula: Pelicula = this.peliculasService.encontrar_pelicula(this.indice);
    this.cuadroTitulo = pelicula.titulo;
    this.cuadroDirector = pelicula.director;
    this.cuadroAnio = pelicula.anio;
    this.cuadroGenero = pelicula.genero;
    this.cuadroDuracion = pelicula.duracion;
    this.cuadroSinopsis = pelicula.sinopsis;

  }

  accion_pelicula() {
    if (this.accion == 1) {
      let miPelicula = new Pelicula(this.cuadroTitulo, this.cuadroDirector, this.cuadroAnio, this.cuadroGenero, this.cuadroDuracion, this.cuadroSinopsis);
      this.peliculasService.actualizar_pelicula(this.indice, miPelicula);
    } else {
      this.peliculasService.eliminar_pelicula(this.indice);
    }

    setTimeout(() => {
      this.router.navigate(['']);
    }, 500);
  }
}
