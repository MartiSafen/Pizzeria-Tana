import { Component } from '@angular/core';
import { PizzaList } from '../pizza-list/pizza-list';
import { Cart } from '../cart/cart';
@Component({
  selector: 'app-pizzeria-pizzas',
  standalone: true,
  imports: [PizzaList, Cart],
  templateUrl: './pizzeria-pizzas.html',
  styleUrls: ['./pizzeria-pizzas.css'],
})
export class PizzeriaPizza {}
