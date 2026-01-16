import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  standalone: true,
  template: `
    <h1>{{title()}}</h1>
    <p>
      componente-inline works!
    </p>
  `,
  styles: `
    h1 {
      color: blue;
    }
  `,
})
export class ComponenteInline {
  protected readonly title = signal('Componente inline');
}
