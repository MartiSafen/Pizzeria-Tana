import { Routes } from '@angular/router';
import { PizzeriaAbout } from './pizzeria-about/pizzeria-about';
import { PizzeriaPizza } from './pizzeria-pizzas/pizzeria-pizzas';
 export const routes: Routes = [
    {
        path : '',
        redirectTo: 'pizzas',
        pathMatch: 'full'   
    },
    {
        
        path : 'pizzas',
        component:PizzeriaPizza
    },
    {
        path : 'about',
        component:PizzeriaAbout
    }
];
export class AppRoutes {
}