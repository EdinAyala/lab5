/*import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  standalone: true,
  imports: [],
  providers: [ServicioEmpleadoService],
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadoService){}

  agregar_caracteristica(value: string){
    //this.miServicio.muestra_mensaje("Caracteristica agregada: " + value);
    this.caracteristicasEmpleados.emit(value);
  }
}*/

import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioPeliculaService } from '../servicio-pelicula.service';

@Component({
  selector: 'app-comentarios-pelicula',
  standalone: true,
  imports: [],
  providers: [ServicioPeliculaService],
  templateUrl: './comentarios-pelicula.component.html',
  styleUrl: './comentarios-pelicula.component.css'
})
export class ComentariosPeliculaComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() comentariosPeliculas = new EventEmitter<string>();

  constructor(private miServicio: ServicioPeliculaService) {}

  agregar_comentario(value: string) {
    // this.miServicio.muestra_mensaje("Comentario agregado: " + value);
    this.comentariosPeliculas.emit(value);
  }
}

