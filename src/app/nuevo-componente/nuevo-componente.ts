import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  standalone: true,
  templateUrl: './nuevo-componente.html',
  styleUrl: './nuevo-componente.css',
})
export class NuevoComponente {
  protected readonly title = signal('Nuevo componente');
}
