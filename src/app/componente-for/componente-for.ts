import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-for',
  imports: [CommonModule],
  templateUrl: './componente-for.html',
  styleUrl: './componente-for.css',
})
export class ComponenteFor {
  protected readonly tareas = signal([
    'Item 1',
    'Item 2',
    'Item 3'
  ]);

  agregarTarea(nuevaTarea: string) : void {
    if (nuevaTarea.trim()) {
      this.tareas.update((tareas) => [...tareas, nuevaTarea]);
    }
  }
}
