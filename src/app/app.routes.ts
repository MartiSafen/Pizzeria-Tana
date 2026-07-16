import { Routes } from '@angular/router';
import { PizzeriaAbout } from './pizzeria-about/pizzeria-about';
import { PizzeriaPizza } from './pizzeria-pizzas/pizzeria-pizzas';
import {SignUp} from './components/sign-up/sign-up';
 export const routes: Routes = [
    {
    path: '', redirectTo: 'signup', pathMatch: 'full' },
    {
        path : 'signup',
        component:SignUp
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