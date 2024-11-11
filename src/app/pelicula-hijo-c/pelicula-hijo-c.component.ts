

import { Component, Input } from '@angular/core';
import { Pelicula } from '../pelicula.models';
import { ComentariosPeliculaComponent } from "../comentarios-pelicula/comentarios-pelicula";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pelicula-hijo-c',
  standalone: true,
  imports: [ComentariosPeliculaComponent, CommonModule, RouterModule, FormsModule],
  templateUrl: './pelicula-hijo-c.component.html',
  styleUrl: './pelicula-hijo-c.component.css'
})
export class PeliculaHijoComponent {

  @Input() peliculaLista: Pelicula;
  @Input() indice: number;
  array_comentarios = [''];

  agregar_comentario(comentario: string) {
    this.array_comentarios.push(comentario);
  }
}

