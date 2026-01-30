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

  //son signals el tipo de autoinfiere
  protected readonly mensaje!: Signal<string>;
  protected readonly _mensaje = signal<string>('');

  constructor(private route: ActivatedRoute) {

    //reactivo
    // Si el valor viene de fuera (Observable, Router, HTTP) → el Signal es de solo lectura
    // Angular te protege para que no rompas la fuente original.
    this.mensaje = toSignal(
      this.route.queryParams.pipe(
        map(params => params['mensaje'] || '')
      ),
      { initialValue: '' }
    );

    //esto solo si es necesario manipular el valor de la fuente original
    this._mensaje.set(this.mensaje())
  }

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
