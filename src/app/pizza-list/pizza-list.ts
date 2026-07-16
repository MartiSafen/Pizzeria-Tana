import { Component,OnInit } from '@angular/core';
import {Pizza } from './pizza';  
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { InputInteger } from '../input-integer/input-integer';
import { PizzaCartService} from '../pizza-cart';
import { PizzaData } from '../pizza-data';
@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputInteger],
  templateUrl: './pizza-list.html',
  styleUrl: './pizza-list.css',
})
export class PizzaList implements OnInit {
pizzas: Pizza[] = [];

constructor(private pizzaData: PizzaData, private cart: PizzaCartService) {}
ngOnInit(): void {
  this.pizzaData.getAll().subscribe(pizzas  => this.pizzas =pizzas); 
}


addToCart(pizza: Pizza): void {
  if (pizza.quantity <= 0) {
    return;
  }

  this.cart.addToCart(pizza);
  pizza.stock -= pizza.quantity;
  pizza.quantity = 0;
}
 maxReached(message: string) {
  console.log(message);
}
 

}
