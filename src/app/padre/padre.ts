import { Component, signal, ViewChild } from '@angular/core';
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

  //usando ViewChild para acceder al hijo desde el padre
  @ViewChild(Hijo) hijo!: Hijo;   //obtener referencia al hijo
  cambiarMensajeHijo() {
    this.hijo.cambiarMensaje("mensaje nuevo desde el padre");
  }
}
