import { Component,OnInit } from '@angular/core';
import {Pizza } from './pizza';  
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { InputInteger } from '../input-integer/input-integer';
import { PizzaCartService} from '../pizza-cart';
@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputInteger],
  templateUrl: './pizza-list.html',
  styleUrl: './pizza-list.css',
})
export class PizzaList implements OnInit {
pizzas: Pizza[] = [
  {
    name: "Muzzarella",
    flavor: "Clásica",
    price: 12000,
    stock: 15,
    quantity: 0,
    image: "assets/muzzarella.jpg.webp",
    clearence: false
  },
  {
    name: "Napolitana",
    flavor: "Tomate y ajo",
    price: 14500,
    stock: 10,
    quantity: 0,
    image: "assets/napolitana.jpg.jpg",
    clearence: false
  },
  {
    name: "Fugazzeta",
    flavor: "Cebolla y queso",
    price: 15000,
    stock: 8,
    quantity: 0,
    image: "assets/fugazzeta.jpg",
    clearence: false
  },
  {
    name: "Calabresa",
    flavor: "Longaniza",
    price: 16000,
    stock: 12,
    quantity: 0,
    image: "assets/calabresa.jpg.jpg",
    clearence: false
  }
];

  constructor(private cart : PizzaCartService 
    ) { 
    }  


  ngOnInit() :void {

   }

   addToCart(pizza: Pizza): void{
    this.cart.addToCart(pizza);
    pizza.stock -= pizza.quantity;
    pizza.quantity = 0;

   }
 maxReached(message: string) {
  console.log(message);
}
 

}
