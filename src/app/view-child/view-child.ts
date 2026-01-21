import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.html',
  styleUrl: './view-child.css',
})
export class ViewChildComponent {
  /**
   * @ViewChild('referenciaInput') elementoInput!: ElementRef
   * 
   * @param referenciaInput es el nombre del template reference variable
   * @param elementoInput es el nombre de la propiedad
   * @param ElementRef es el tipo de dato que se va a recibir
   * 
   * ❌ Cuándo NO usar @ViewChild
   * 
   * 🚫 Para pasar datos → usa @Input
   * 🚫 Para emitir eventos → usa @Output
   * 🚫 Para estado compartido → usa services
   * 
   * 🟢 Cuándo SÍ usar
   * 
   * ✔ Foco en inputs
   * ✔ Scroll
   * ✔ Medir tamaños
   * ✔ Llamar métodos del hijo (con cuidado)
  */

  @ViewChild('referenciaInput') elementoInput!: ElementRef

  cambiarTexto() {
    this.elementoInput.nativeElement.value = 'Texto cambiado';
  }
}
