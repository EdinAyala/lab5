

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeliculaHijoComponent } from '../pelicula-hijo-c/pelicula-hijo-c.component';
import { Pelicula } from '../pelicula.models';
import { PeliculasService } from '../peliculas.service';
import { ServicioPeliculaService } from '../servicio-pelicula.service';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule, FormsModule, PeliculaHijoComponent],
  providers: [ServicioPeliculaService],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Películas';

  peliculas: Pelicula[];

  cuadroTitulo: string = "";
  cuadroDirector: string = "";
  cuadroAno: number = 0;
  cuadroGenero: string = "";
  cuadroDuracion: number = 0;
  cuadroSinopsis: string = "";

  constructor(private miServicio: ServicioPeliculaService, private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.peliculasService.obtener_peliculas().subscribe(
      misPeliculas => {
        console.log(misPeliculas);
        this.peliculas = Object.values(misPeliculas);
        this.peliculasService.set_peliculas(this.peliculas);
      }
    )
  }

  guardar_pelicula() {
    let miPelicula = new Pelicula(this.cuadroTitulo, this.cuadroDirector, this.cuadroAno, this.cuadroGenero, this.cuadroDuracion, this.cuadroSinopsis);

    //this.miServicio.muestra_mensaje("Película agregada exitosamente");

    this.peliculasService.agregar_pelicula_servicio(miPelicula);

    this.cuadroTitulo = "";
    this.cuadroDirector = "";
    this.cuadroAno = 0;
    this.cuadroGenero = "";
    this.cuadroDuracion = 0;
    this.cuadroSinopsis = "";
  }
}

