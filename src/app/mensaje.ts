import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',   //singleton, disponible en toda la aplicacion con una unica instancia
})
export class Mensaje {
  protected readonly mensaje = signal('hola desde el servicio mensajes'); // Signal reactivo para almacenar el mensaje

  public readonly _mensaje = computed(() => this.mensaje()); // Computed que reacciona a cambios del signal

  public getMensaje(): string { // Método getter tradicional para obtener el mensaje
    return this.mensaje();
  }

  public get mostrarMensaje(): string { // Property getter usando signal directo (acceso reactivo)
    return this.mensaje();
  }
}
