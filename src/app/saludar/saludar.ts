import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludar',
  imports: [FormsModule],
  templateUrl: './saludar.html',
  styleUrl: './saludar.css',
})
export class Saludar {
  protected readonly saludo = signal('saludo inicial xd');

  public readonly _saludo = computed(() => this.saludo());

  //opcion 2
  protected readonly saludo2 = signal('saludo2 inicial uwu');

  public updateSaludo2(value: string) {
    this.saludo2.set(value);
  }
}