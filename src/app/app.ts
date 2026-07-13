
import { RouterOutlet,RouterLink } from '@angular/router';
import { Component,NgModule,signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title :string = 'Pizzeria Tana';
}
