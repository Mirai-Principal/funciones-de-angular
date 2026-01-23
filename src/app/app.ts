import { Component, computed, effect, signal } from '@angular/core';
import { Mensaje } from "./services/mensaje";
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';

@Component({
  selector: 'app-root', //indica el selector que se va a usar para el componente
  standalone: true, //indica que el componente es standalone y no necesita ser importado en el app.module.ts
  imports: [
    ListadoUsuarios
  ], //importa el router outlet para que el componente se pueda usar en el router
  templateUrl: './app.html', //indica el archivo html que se va a usar para el componente
  styleUrl: './app.css', //indica el archivo css que se va a usar para el componente
})
export class App {
  protected readonly title = signal('Servicios y observables en angular'); //indica el titulo que se va a usar para el componente

  mensaje: string
  constructor(mensajeService: Mensaje) {      //angular busca una instancia y lo inyecta
    this.mensaje = mensajeService.getMensaje();
  }

  protected readonly contador = signal(0);

  changeName() {
    this.title.set('Nuevo nombre 🚀');
  }
  //similar a useState en react
  increment() {
    this.contador.set(this.contador() + 1);
  }

  //similar a useMemo en react
  protected readonly double = computed(() => this.contador() * 2);

  //similar a useEffect en react
  protected readonly effect = effect(() => {
    console.log('contador cambió:', this.contador());
  });
}
