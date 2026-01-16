import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  //no reactivo
  private titulo = 'titulo de la pagina hijo'
  //reactivo
  private titulo1 = signal('titulo de la pagina hijo')

  //getter de typescript
  public get mostrarTitulo() : string {
    return this.titulo
  }

  //get con javascript
  public getTitulo() : string{
    return this.titulo
  }

  //otra forma
  public readonly _titulo1 = computed(()=> this.titulo1())
}
