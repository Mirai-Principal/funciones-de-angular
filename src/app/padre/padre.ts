import { Component, signal } from '@angular/core';
import { Hijo } from "./hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  //envio datos al hijo
  protected readonly mensajePadre = signal<string>("hola hijo desde padre");

  //recibo datos del hijo
  protected readonly mensaje = signal<string>("");
  mensajeHijo(mensajeHijo: string) {
    this.mensaje.set(mensajeHijo);
  }
}
