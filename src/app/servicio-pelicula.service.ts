import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPeliculaService {

  constructor() { }

  muestra_mensaje(mensaje: string){
    alert(mensaje);
  }
}
