import { Routes } from '@angular/router';
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { UsandoPipes } from './usando-pipes/usando-pipes';

export const routes: Routes = [
    { path: '', component: ListadoUsuarios },      //'' o '/' equivale a la ruta raiz o la ruta principal localhost:4200/
    { path: 'mostrar-mensaje/:mensajeParametro', component: MostrarMensaje },
    { path: 'usando-pipes', component: UsandoPipes },
];
