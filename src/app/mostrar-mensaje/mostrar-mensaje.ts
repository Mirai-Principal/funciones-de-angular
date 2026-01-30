import { Component, input, Signal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css',
})
export class MostrarMensaje {
  //para recibir parámetros, angular moderno, 
  // @input royectos legacy, compatibilidad con código existente
  protected readonly mensajeParametro = input<string>('');
  protected readonly _mensajeParametro = signal<string>('');

  //protected readonly mensaje!: Signal<string>;

  ngOnInit(): void {
    this._mensajeParametro.set(this.mensajeParametro())

    //si los parámetros NO cambian mientras el componente está activo
    // this.mensaje.set(this.route.snapshot.queryParams['mensaje'])
  }

  public mostrarMensaje() {
    this._mensajeParametro.set('haz hecho click en el boton');
  }

  public resetMensaje() {
    this._mensajeParametro.set('');
  }
}
