import { Component, signal, Signal } from '@angular/core';
import { Usuarios } from '../services/usuarios';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

interface Usuario {
  id: number;
  name: string;
}

@Component({
  selector: 'app-listado-usuarios',
  imports: [AsyncPipe, NgFor],
  templateUrl: './listado-usuarios.html',
  styleUrl: './listado-usuarios.css',
})
export class ListadoUsuarios {
  constructor(private usuarioService: Usuarios) {
    //opcion 1 - usando observable
    this._usuarios$ = this.usuarioService.obtenerDatos(); //esto 1

    //opcion 3 - usando signal
    this.usuarios3 = toSignal(this.usuarioService.obtenerDatos());
  }
  //opcion 1  - Observable
  _usuarios$: Observable<any>; // y esto 2 se usa de preferencia para mostrar datos directamente en el template

  //necesita suscribirse para obtener los datos
  procesarUsuarios() {
    this._usuarios$.subscribe((data) => {
      const ids = data.map((usuario: any) => usuario.id);
      console.log(ids);
    });
  }

  // opcion 2
  //puede causar problemas de memoria si la data es muy grande
  //necesita desuscribirse para evitar memory leaks
  //util para manejar datos localmente
  usuarios2: Usuario[] = [];
  ngOnInit() {
    this.usuarioService.obtenerDatos().subscribe((data) => {
      this.usuarios2 = data;
    });
  }

  //necesita desuscribirse para evitar memory leaks
  ngOnDestroy() {
    this.usuarios2 = [];
  }

  //acceso a datos no necesita suscripción px ya que se subscribe en el ngOnInit
  getUsuarios2(): void {
    console.log(this.usuarios2);
  }


  //opcion 3
  //usando signal, no necesita suscripción, es automatico
  //mas usado para manejar datos localmente
  usuarios3: Signal<Usuario[]> = signal<Usuario[]>([]);
  accesoUsuarios3(): void {
    console.log(this.usuarios3());
  }


}


