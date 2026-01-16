import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css',
})
export class Interpolacion {
  protected readonly title = signal('Interpolacion');
  //fachada pa exponer datos
  public readonly _titulo = computed(()=>this.title())

  usuario = {
    nombre: 'Juan',
    edad: 20,
    email: 'juan@gmail.com',
  };

  protected readonly usuario2 = signal({
    nombre: 'Ruri',
    edad: 26,
    email: 'ruri@gmail.com',
  });

  public saludar(){
    return `Hola ${this.usuario2().nombre}`
  }
}
