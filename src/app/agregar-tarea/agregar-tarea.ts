import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  imports: [],
  templateUrl: './agregar-tarea.html',
  styleUrl: './agregar-tarea.css',
})
export class AgregarTarea {
  protected readonly tarea = signal('');

  agregarTarea(nuevaTarea: string) : void {
    this.tarea.set(nuevaTarea);
  }
}
