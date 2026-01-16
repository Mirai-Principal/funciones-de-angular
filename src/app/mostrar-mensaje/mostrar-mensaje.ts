import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css',
})
export class MostrarMensaje {
  //son signals el tipo de autoinfiere
  protected readonly mensaje = signal('');

  //tipado
  protected readonly mensaje2: string = '';

  public mostrarMensaje() {
    this.mensaje.set('haz hecho click en el boton');
  }

  public resetMensaje() {
    this.mensaje.set('');
  }
}
