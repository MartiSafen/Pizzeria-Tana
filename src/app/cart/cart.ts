import { Component } from '@angular/core';
import { PizzaCartService } from '../pizza-cart';
import { Pizza } from '../pizza-list/pizza';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
cartList: Pizza[] = [];  
  constructor(private cart : PizzaCartService) {

   this.cart.cartList.subscribe (c =>{
    this.cartList = c;
  console.log(c);
  });

  }
}
