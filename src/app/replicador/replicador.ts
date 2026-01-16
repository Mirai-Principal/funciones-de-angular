import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.html',
  styleUrl: './replicador.css',
})
export class Replicador {
  protected readonly texto = signal('');

  public actualizarTexto(evento: Event) {
    const elementoInput = evento.target as HTMLInputElement;
    this.texto.set(elementoInput.value);
  }
}
