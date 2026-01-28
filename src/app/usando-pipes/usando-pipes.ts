import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usando-pipes',
  imports: [CommonModule],
  templateUrl: './usando-pipes.html',
  styleUrl: './usando-pipes.css',
})
export class UsandoPipes {
  protected readonly empleados = signal([
    { nombre: 'Juan', edad: 30, sueldo: 1000, fechaContratacion: new Date('2022-01-01') },
    { nombre: 'Pedro', edad: 25, sueldo: 2000, fechaContratacion: new Date('2022-01-02') },
    { nombre: 'Maria', edad: 35, sueldo: 3000, fechaContratacion: new Date('2022-01-03') },
    { nombre: 'Ana', edad: 28, sueldo: 4000, fechaContratacion: new Date('2022-01-04') },
  ]);
}

