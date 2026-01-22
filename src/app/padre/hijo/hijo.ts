import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {

  // ! operador de non null assertion que permite decirle a typescript que la variable no sera nula y que no de error
  //sera inicializado por el padre luego
  @Input({ required: true }) mensaje!: string

  //envio datos al padre en un evento
  @Output() mensajeHijo = new EventEmitter<string>();

  //emite el evento con el mensaje
  enviarMensaje() {
    this.mensajeHijo.emit('hola padre desde hijo');
  }

  //usando ViewChild para acceder al hijo desde el padre
  mensaje2: string = "mensaje desde el hijo";
  cambiarMensaje(nuevoMensaje: string) {
    this.mensaje2 = nuevoMensaje;
  }
}
