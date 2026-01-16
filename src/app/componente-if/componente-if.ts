import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  imports: [],
  templateUrl: './componente-if.html',
  styleUrl: './componente-if.css',
})
export class ComponenteIf {
  protected readonly isAutenticado = signal(false);

  alternaAutenticacion() {
    this.isAutenticado.set(!this.isAutenticado());
  }

}
