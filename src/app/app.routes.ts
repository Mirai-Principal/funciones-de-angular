import { Routes } from '@angular/router';
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { UsandoPipes } from './usando-pipes/usando-pipes';
import { Padre } from './padre/padre';
import { Hijo } from './hijo/hijo';

export const routes: Routes = [
    { path: '', component: ListadoUsuarios },      //'' o '/' equivale a la ruta raiz o la ruta principal localhost:4200/
    { path: 'mostrar-mensaje/:mensajeParametro', component: MostrarMensaje },
    { path: 'usando-pipes', component: UsandoPipes },
    {
        path: 'configuracion', children: [      //ruta con hijos
            { path: 'padre', component: Padre },    //localhost:4200/configuracion/padre
            { path: 'hijo', component: Hijo }       //localhost:4200/configuracion/hijo
        ]
    }
];
